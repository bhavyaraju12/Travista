import './App.css';

import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Signup from './pages/Signup';

import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogPage from "./pages/BlogPage";
import Home from './pages/Home'
import Signup from './pages/Signup'

import Signin from './pages/Signin';
import AboutUs from './pages/AboutUs';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from 'react';



function App() {
  const [token, setToken] = useState(false);

  // Store token in session storage when it changes
  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  // Retrieve token from session storage on page load
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  return (

    <div className="text-white h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Define the route path as '/home' (lowercase) */}
          <Route path="/home" element={token ? <Home token={token} /> : <Navigate to="/login" />} />
          <Route path="/About" element={<AboutUs/>} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/Blogs" element={<BlogPage />} />

          {/* Ensure '/login' path is lowercase */}
          <Route path="/login" element={<Signin setToken={setToken} />} />
        </Routes>
        <Hero />
      
     
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
