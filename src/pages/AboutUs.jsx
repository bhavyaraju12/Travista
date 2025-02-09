import React from "react";
import "../index.css"; 

import { Link } from 'react-router-dom'



const AboutUs = () => {
  return (
    <div className="font-poppins text-black bg-white">
  
      <main className="container mx-auto px-4 py-12">
 
        <div className="text-center mb-16   fade-in">
          <h1 className="text-xl md:text-4xl font-bold text-black mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted companion in creating unforgettable travel experiences, from solo
            adventures to family getaways.
          </p>
        </div>

   
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 fade-in">
      
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/assets/image2.jpg" alt="Travel Experience" className="w-full h-96 object-cover" />

          </div>

    
          <div className="space-y-6">

            <p className="text-gray-600 text-lg">
              At <b>TRAVISTA</b>, we believe that travel should be an enriching experience accessible
              to everyone, regardless of budget. Our mission is to connect adventurers with
              affordable yet breathtaking destinations, ensuring that every journey is filled with
              unforgettable moments.
              <br /><br />
              Whether you're a solo traveler craving the tranquility of misty mountain trails, a
              couple seeking a romantic getaway, or a family eager to create cherished memories by
              the ocean, we are here to make your travel dreams a reality. From carefully curated
              itineraries to expert travel tips, we ensure that every step of your journey is
              seamless, exciting, and tailored to your needs.
              <br /><br />
              At <b>TRAVISTA</b>, adventure isn't just about the destination—it's about the
              experiences, the stories, and the memories you create along the way. Let us take you there.
            </p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;