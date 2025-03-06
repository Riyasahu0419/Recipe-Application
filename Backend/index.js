require("dotenv").config();
const express=require("express")
const connection = require("./config/db")
const user=require("./routes/UserRoute")
const app=express()
const cors = require("cors");
app.use(cors());

app.use(express.json())
app.use("/user",user)
app.use(
    cors({
      origin: "http://localhost:5173", // Allow frontend
      methods: ["GET", "POST", "PUT", "DELETE"], // Fix method format
      credentials: true,
    })
  );

const PORT=8080
app.listen(PORT,async()=>{
    try {
        await connection()
        console.log("Server running successfully on port", PORT)
    } catch (error) {
        console.log({error:error.message})
    }
})