require("dotenv").config();
const express=require("express")
const connection = require("./config/db")
const user=require("./routes/UserRoute")
const recipeRoutes = require("./routes/recipes");
const userRecipeRoutes = require("./routes/userRecipes");
const app=express()
const cors = require("cors");

app.use(cors())


app.use(express.json())


app.use("/user",user)

app.use("/recipes", recipeRoutes);

app.use("/userRecipe", userRecipeRoutes);

app.use(
    cors({
      origin: "https://recipe-application-delta.vercel.app/", // Allow frontend
      methods: ["GET", "POST", "PUT", "DELETE"], // Fix method format
      credentials: true,
    })
  );


  app.get("/", (req, res) => {
    res.send("Recipe API is running...");
  });

const PORT=8080
app.listen(PORT,async()=>{
    try {
        await connection()
        console.log("Server running successfully on port", PORT)
    } catch (error) {
        console.log({error:error.message})
    }
})