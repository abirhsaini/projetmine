import React from 'react';
import Navigation from '../component/navigation';
import BreakList from "../DataBreakfast";
import { useSelector } from 'react-redux';

import Card from "../component/Card.jsx";
import Footer from '../component/Footer';


import "../style/tout.scss";
import { NavLink } from 'react-bootstrap';



const Break =()=>{   
    
   
   
    const cards = BreakList.map((item,i) => {
        return (
            <Card 
            key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                text={item.text}
                price={item.price}
                item={item}
                
            />
        )
    })
    const state= useSelector((state)=>state.handleCart);
    console.log(state);
    return (
        <div>
<div className='discover'> discover our Breakfast </div>
            <Navigation />
            {cards}
            <br />
            
            <Footer />
        </div>
    );
};

export default Break;