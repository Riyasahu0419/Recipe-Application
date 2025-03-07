const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
   title: String,
  image: String,
  recipeId: Number,
  userId: String,// To associate recipes with users
});

const RecipeModel=mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeModel
