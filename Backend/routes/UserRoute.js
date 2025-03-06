const express=require("express")
const route=express.Router()
const user=require("../model/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

route.post("/register",async(req,res)=>{
    const{name,password,email}=req.body
    try {
        bcrypt.hash(password,Number(process.env.SALT_ROUNDS),async(err,hash)=>{
            if(err){
                res.status(400).json({err})
            }else{
                const newUser=new user({name,password:hash,email})
                await newUser.save()
                res.status(200).json({msg:"you have been successfully registered"})
            }
        })
    } catch (error) {
        res.status(500).json({error})
    }
})


route.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
       const matchingUser=await user.findOne({email})
       if(matchingUser){
        const isPassMatch=await bcrypt.compare(password,matchingUser.password)
        if(isPassMatch){
            const token=jwt.sign({userId:matchingUser._id,user:matchingUser.name},process.env.SECRET_KEY)
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