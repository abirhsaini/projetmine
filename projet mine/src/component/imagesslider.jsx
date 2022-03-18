import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const Imagesslider = () => {
    const data = [
        {
          image:require( "../assets/image/1.png"),
          
        },
        {
          image:require ("../assets/image/2.jpg"),
          
        },
        {
          image:require( "../assets/image/3.jfif"),
         
        },
        {
          image: require("../assets/image/4.jpg"),
         
        },
        {
          image: require("../assets/image/restaurants.jpg"),
          
        },
        {
          image:require( "../assets/image/SLIDER-1.jpeg"),
        
        },
       
        {
          image:require( "../assets/image/5.jpg"),
          
        }
      ];
    return (
        
        <div>
            <Carousel
            data={data}
            time={1000}
            width="1000px"
            height="500px"
            
            radius="10px"
            slideNumber={true}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
    );
};

export default Imagesslider;