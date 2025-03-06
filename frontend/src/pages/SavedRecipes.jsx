import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const SavedRecipes = () => {
  const [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
    setLikedRecipes(storedRecipes);
  }, []);

  const removeLike = (id) => {
    const updatedLikes = likedRecipes.filter(recipe => recipe.id !== id);
    localStorage.setItem("likedRecipes", JSON.stringify(updatedLikes));
    setLikedRecipes(updatedLikes);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Liked Recipes</h1>

      {likedRecipes.length === 0 ? (
        <p className="text-center text-gray-500">You haven't liked any recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {likedRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800">{recipe.name}</h3>
                <button
                  onClick={() => removeLike(recipe.id)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md flex items-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>Unlike</span>
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


