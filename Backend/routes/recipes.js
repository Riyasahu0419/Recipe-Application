const express = require("express");
const axios = require("axios");
const router = express.Router();

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

// Search recipes by keyword
router.get("/", async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=&apiKey=${process.env.SPOONACULAR_API_KEY}`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query,
        number: 1000, // Fetch 10 recipes
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error: error.message });
  }
});

module.exports = router;
