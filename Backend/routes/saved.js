const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Recipe = require('../model/SaveRecipe');

// Save recipe to MongoDB
router.post('/', async (req, res) => {
  try {
    const { id, name, ingredients, instructions, userId, image, mealType } = req.body;

    // Check if recipe already exists
    const existingRecipe = await Recipe.findOne({ id });
    if (existingRecipe) {
      return res.status(400).json({ message: 'Recipe already saved' });
    }

    const recipe = new Recipe({
      id,
      name,
      ingredients,
      instructions,
      userId,
      image,
      mealType,
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete recipe from MongoDB
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findOneAndDelete({ id: req.params.id });
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
