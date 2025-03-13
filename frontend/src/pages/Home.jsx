import React, { useState, useEffect } from 'react';
import { Heart, Clock, ChefHat, Search } from 'lucide-react';

const RecipeCard = ({ recipe, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  
  // Load initial liked state from storage or database when component mounts
  useEffect(() => {
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
    setIsLiked(likedRecipes.some(r => r.id === recipe.id));
  }, [recipe.id]);

  const handleLike = async (e) => {
    e.stopPropagation(); // Prevent the card click from firing
    
    try {
      // Save to database
      const response = await fetch('https://recipe-application-ao7q.onrender.com/saved/', {
        method: isLiked ? 'DELETE' : 'POST', // DELETE if unliking, POST if liking
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) throw new Error('Failed to update saved recipe');
      
      // If DB operation was successful, update local state
      const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
      
      let updatedLikes;
      if (isLiked) {
        updatedLikes = likedRecipes.filter(r => r.id !== recipe.id);
      } else {
        updatedLikes = [...likedRecipes, recipe];
      }
      
      // Update localStorage
      localStorage.setItem("likedRecipes", JSON.stringify(updatedLikes));
      
      // Update UI state
      setIsLiked(!isLiked);
      
      console.log(isLiked ? 'Recipe removed from favorites' : 'Recipe saved to favorites');
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };
  
  
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl relative cursor-pointer" onClick={() => onClick(recipe)}>
        <div className="relative">
          <img src={recipe.image} alt={recipe.name} className="w-full h-56 object-cover" />
          <button onClick={handleLike} className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition">
            <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
          </button>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-xl mb-3 text-gray-800 truncate">{recipe.name}</h3>
          <div className="flex justify-between items-center text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>{recipe.cookTimeMinutes} mins</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChefHat className="w-5 h-5 text-green-500" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/recipes');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.error("Fetching error:", err);
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

  const filteredRecipes = recipes.filter(recipe => 
    (selectedCategory === 'All' || recipe.mealType.includes(selectedCategory)) && 
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#D7DBE0] to-purple-600 text-black py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Culinary Adventures Await</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Explore a world of flavors, from quick meals to gourmet experiences</p>

        {/* Search Bar */}
        <div className="flex max-w-xl mx-auto">
          <input type="text" placeholder="Search for recipes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
          className="w-full px-7 py-3 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#EEEEEE]" />
          <button className="bg-[#734060] text-white px-7 rounded-r-full hover:bg-[#865B75] transition">Search</button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6 flex justify-center space-x-4">
        {categories.map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)} 
          className={`px-4 py-2 rounded-full transition ${selectedCategory === category ? 
          'bg-[#734060] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>{category}</button>
        ))}
      </div>

      {/* Recipes Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Featured Recipes</h2>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">
            <p className="text-xl">{error}</p>
            <button onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Try Again</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} />)
            ) : (
              <div className="text-center text-gray-500 py-10 col-span-3">
                <Search className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <p className="text-xl">No recipes found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button onClick={() => setSelectedRecipe(null)} className="absolute top-4 right-4 text-gray-600 hover:text-black">✖</button>
            <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} className="w-full h-56 object-cover mb-4" />
            <p className="text-gray-700"><strong>Ingredients:</strong> {selectedRecipe.ingredients.join(', ')}</p>
            <p className="text-gray-700 mt-2"><strong>Instructions:</strong> {selectedRecipe.instructions.join(' ')}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Main;