const express=require("express")
const route=express.Router()
const UserModel=require("../model/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

route.post("/register", async (req, res) => {
    try {
      console.log("Incoming request:", req.body);
  
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        console.log("Missing required fields");
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        console.log("User already exists:", email);
        return res.status(400).json({ message: "User already exists" });
      }
  
      console.log("Hashing password...");
      bcrypt.hash(password, Number(process.env.SALT_ROUNDS), async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
  
        console.log("Password hashed successfully:", hash);
        const user = new UserModel({ username, email, password: hash });
  
        try {
          await user.save();
          console.log("User saved to database:", user);
          res.status(201).json({
            message: "You have been Successfully Registered!",
            user,
          });
        } catch (saveError) {
          console.error("Error saving user:", saveError);
          res.status(500).json({ error: "Error saving user" });
        }
      });
    } catch (err) {
      console.error("Unexpected error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

route.post("/login",async(req,res)=>{
    const {username,email,password}=req.body
    try {
       const matchingUser=await UserModel.findOne({email})
       if(matchingUser){
        const isPassMatch=await bcrypt.compare(password,matchingUser.password)
        if(isPassMatch){
            const token=jwt.sign({userId:matchingUser._id},process.env.SECRET_KEY)
            res.status(200).json({msg:"Login Successfully",token})
        }
        else{
            res.status(400).json({msg:"invailid password"})
        }
        
    } else{
           res.status(400).json({msg:"user not Found"})

       }

    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports=route