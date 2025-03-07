import React, { useState} from "react";

const About = () => {
 
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="bg-[#D7DBE0] from-amber-600 to-orange-500 text-black py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Our Culinary Journey</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-4">
          Discover the passion behind our recipes and meet the talented chefs who bring delicious flavors to your table.
        </p>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-amber-800">Our Story</h2>
          <p className="text-gray-700 mb-4">
            March in 2025, our culinary platform started with a simple mission: to bring authentic, easy-to-follow recipes to home cooks worldwide.
          </p>
          <p className="text-gray-700">
            What began as a small collection of family recipes has grown into a diverse library of meals, from quick weeknight dinners to elaborate feasts.
          </p>
        </div>
        <img src="https://img.freepik.com/premium-photo/international-team-chefs_917664-54146.jpg" alt="Our kitchen team" className="md:w-1/2 rounded-lg shadow-lg" />
      </section>

      

      {/* Meet the Team */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-800">Meet Our Culinary Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Chef Maria", role: "Executive Chef", desc: "Specializes in Mediterranean cuisine.", img: "https://previews.123rf.com/images/serezniy/serezniy1301/serezniy130105717/21537587-young-woman-chef-cooking-in-kitchen.jpg" },
            { name: "Chef James", role: "Pastry Specialist", desc: "Brings classic techniques to innovative desserts.", img: "https://media.istockphoto.com/id/921788748/photo/portrait-of-confectioner-decorating-cake-in-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=SFVHFQz-gy2SOkS4rIlMObUtgk1bVPHZWPFKNBGtThg=" },
            { name: "Chef Priya", role: "Global Cuisine Expert", desc: "Expert in fusion dishes blending global traditions.", img: "https://st2.depositphotos.com/1177973/11053/i/450/depositphotos_110537550-stock-photo-young-woman-cooking-in-kitchen.jpg" }
          ].map(({ name, role, desc, img }) => (
            <div key={name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img} alt={name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-amber-800">{name}</h3>
                <p className="text-amber-600">{role}</p>
                <p className="text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#734060] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Culinary Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Have a recipe to share or a question for our chefs? We'd love to hear from you!
        </p>
        <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition">
          Get Start
        </button>
      </section>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-y-auto">
            <div className="relative">
              <img src={selectedRecipe.image || "/api/placeholder/800/400"} alt={selectedRecipe.title} className="w-full h-64 object-cover" />
              <button onClick={() => setSelectedRecipe(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-800">{selectedRecipe.title}</h2>
              <p className="text-gray-700 mb-6">{selectedRecipe.description}</p>
              <button onClick={() => setSelectedRecipe(null)} className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
