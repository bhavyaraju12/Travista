
import './App.css';
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin';


import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className=" text-white h-screen " >
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Signin />} />


        </Routes>
        <Hero/>
      </BrowserRouter>




    <Footer/>

    </div>
  );
}

export default App;
