import React from 'react';
import Navigation from '../component/navigation';
import DinnerList from "../DinnerList";
import Card from "../component/Card.jsx";
import Footer from '../component/Footer';
import "../style/tout.scss"
import { useSelector } from 'react-redux';

const Dinner = () => {
    const state= useSelector((state)=>state.handleCart);
 

    const cards = DinnerList.map((item) => {
        return (
            <Card 
                id={item.id}
                image={item.image}
                name={item.name}
                text={item.text}
                price={item.price}
                item={item}
                
            />
        )
    })
    return (
        <div>
<div className='discover'> discover our Dinner </div>
            <Navigation />
            {cards}
            <a href="/cart"  > <div className='third' > go to your cart ({state.length})</div></a>

            <Footer />
        </div>
    );
};

export default Dinner
;