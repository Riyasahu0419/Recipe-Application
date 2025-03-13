const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  userId: { type: Number, required: true },
  image: { type: String, required: true },
  mealType: { type: [String], required: true },
});

module.exports = mongoose.model('savedRecipe', recipeSchema);
