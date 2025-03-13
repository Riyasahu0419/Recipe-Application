import React, { useState, useEffect } from "react";
import { Heart, Trash2 } from "lucide-react";

const SavedRecipes = () => {
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch saved recipes from the database on component mount
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        setIsLoading(true);
        // Fetch from database
        const response = await fetch("http://localhost:8080/saved");
        
        if (!response.ok) throw new Error("Failed to fetch saved recipes");
        
        const data = await response.json();
        setLikedRecipes(data);
        
        // Update localStorage to match database
        localStorage.setItem("likedRecipes", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
        // Fallback to localStorage if database fetch fails
        const storedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
        setLikedRecipes(storedRecipes);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  const removeLike = async (recipe) => {
    try {
      // Delete from database
      const response = await fetch(`https://recipe-application-ao7q.onrender.com/saved/${recipe.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete recipe");
      
      // If successful, update local state
      const updatedLikes = likedRecipes.filter((r) => r.id !== recipe.id);
      setLikedRecipes(updatedLikes);
      
      // Update localStorage to stay in sync
      localStorage.setItem("likedRecipes", JSON.stringify(updatedLikes));
      
      console.log("Recipe removed from favorites");
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Failed to remove recipe. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-10 flex justify-center items-center">
        <p className="text-gray-500">Loading your saved recipes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Saved Recipes
      </h1>

      {likedRecipes.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't saved any recipes yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {likedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  {recipe.name}
                </h3>
                <button
                  onClick={() => removeLike(recipe)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;