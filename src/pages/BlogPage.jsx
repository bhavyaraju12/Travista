import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: "Munnar",
      description: "Famous hill station known for its tea plantations and cool climate.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLiZe-U5rhgI7VZddmdiqB6g5KBvHdS_owQ&s",
      location: "Idukki District, Kerala"
    },
    {
      id: 2,
      name: "Alleppey",
      description: "Known for its beautiful backwaters, houseboats, and serene beaches.",
      image: "https://i.pinimg.com/736x/b6/9a/94/b69a940aad81df26b25c2f2ef41ed4fc.jpg",
      location: "Alappuzha District, Kerala"
    },
    {
      id: 3,
      name: "Wayanad",
      description: "Popular for its wildlife sanctuaries, caves, and spice plantations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSy5tH1xOvN1i2Z8i-IKCAk5i6wVwfMW3Vw&s",
      location: "Wayanad District, Kerala"
    },
    {
      id: 4,
      name: "Fort Kochi",
      description: "Historic coastal town with colonial architecture and Chinese fishing nets.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg/1200px-Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg",
      location: "Kochi, Kerala"
    },
    {
      id: 5,
      name: "Thekkady",
      description: "Home to Periyar Wildlife Sanctuary and spice gardens.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Thekkady.jpg",
      location: "Idukki District, Kerala"
    },
    {
      id: 6,
      name: "Varkala",
      description: "Coastal town known for its cliffs, beaches, and spiritual atmosphere.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjiPwTWuI4V6WAunE-8SKBmhd3LtFUaS-xQ&s",
      location: "Thiruvananthapuram District, Kerala"
    }
  ]);

  return (
    <div className="bg-green-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-2">
          Kerala Tourism
        </h1>
        <p className="text-center text-green-600 mb-8">
          Explore God's Own Country
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  {place.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  📍 {place.location}
                </p>
                <p className="text-gray-700">
                  {place.description}
                </p>
                <button className="mt-4 text-green-600 hover:text-green-800">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;