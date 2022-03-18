import React from "react";
import img from "../assets/image/chefi.jpg";
import "../style/tout.scss";
import "../component/Slider";

import Navigation from "../component/navigation";
import Footer from "../component/Footer";
import Imagesslider from "../component/imagesslider";


function About() {
  return (
    <div className="about">
        <Navigation/>
        <h1>welcome to youfirst</h1>
      <div
        className="aboutTop"
        
      > <Imagesslider /></div>
      <div className="aboutBottom">
        
        
        <div class="d-flex flex-row">
           <div class="p-2"><img className='photo' src={img} alt='granola' /></div>
           <div class="p-2" className="p2"><p>
        We would like to take this opportunity to<br /> welcome  you at our restaurant. We are offering<br /> a warm, friendly atmosphere to  share a meal <br />with family and friends at any time of<br />  the day or evening. All of our dishes are<br /> made with quality fresh ingredients, <br /> it all starts with  the hand-made dough <br /> and our toppings are sourced from the best local growers.
        </p></div>
        </div>
        
        
      </div>
       <Footer/> 
    </div>
  );
}

export default About;