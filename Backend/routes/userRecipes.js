const express = require("express");
const Recipe = require("../model/Recipe");
const auth = require("../middleware/auth");
const router = express.Router();

// Save a recipe
router.post("/",auth, async (req, res) => {
  const { title, image, recipeId, userId } = req.body;

  if (!title || !image || !recipeId || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newRecipe = new Recipe({ title, image, recipeId, userId });
    await newRecipe.save();
    res.json({ message: "Recipe saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving recipe", error: error.message });
  }
});

// Get saved recipes by userId
router.get("/:userId",auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({ userId: req.params.userId });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching saved recipes", error: error.message });
  }
});

module.exports = router;
