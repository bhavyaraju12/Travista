
import './App.css';
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
  Link,
  Route,
  Routes,
} from "react-router-dom";




function App() {
  return (
    <div className=" text-white h-screen" >
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Signin />} />
          <Route path="/Blogs" element={<BlogPage />} />
         
       
        </Routes>
     
      </BrowserRouter>




    <Footer/>

    </div>
  );
}

export default App;
