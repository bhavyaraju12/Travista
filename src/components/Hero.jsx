
import React, { useState } from "react";
import { Link } from 'react-router-dom'




const Card = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};


const Travista = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative font-poppins text-black bg-white">
      <header className="w-full min-h-screen overflow-x-hidden">
        <main className="relative w-full h-screen overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <h2 className="text-2xl md:text-5xl lg:text-6xl uppercase text-white font-bold">Solo trips to family fun</h2>
            <h2 className="text-2xl md:text-5xl lg:text-6xl uppercase text-white font-bold">Budget-friendly adventures await!</h2>
            <div className="flex items-center justify-center relative w-80 mx-auto mt-5">
              <input
                type="text"
                className="w-full px-4 py-3 border-none rounded-full shadow-lg outline-none text-lg"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center w-10 h-10 hover:bg-blue-600 transition duration-300">
                GO
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out opacity-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')" }}></div>
        </main>
      </header>
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Kumbalangi "
            description="Kerala’s First Model Tourism Village   Experience local fishing techniques, Chinese fishing nets, and quiet village life.."
            image="https://www.keralatourism.org/images/enchanting_kerala/hri/Kumbalangi_Experience_the_Rustic_Life_Here_1114.JPG"
          />
          <Card
            title="Paniyeli Poru"
            description="A Riverside Retreat    A hidden nature spot with flowing streams and rocky landscapes, perfect for a day trip.."
            image="https://tripxl.com/blog/wp-content/uploads/2024/07/Waterfall-cover-image-840x425.jpg"
          />
          <Card
            title="Kottayil Kovilakam"
            description="A Confluence of Faiths    A rare place with a temple, church, mosque, and synagogue in close proximity.."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jewish_Synagogue_Kottayil_Kovilakam_North_Pravaoor_DSC_1900.jpg/1200px-Jewish_Synagogue_Kottayil_Kovilakam_North_Pravaoor_DSC_1900.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default Travista;