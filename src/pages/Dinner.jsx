import React from 'react';
import Navigation from '../component/navigation';
import DinnerList from "../DinnerList";
import Card from "../component/Card.jsx";
import Footer from '../component/Footer';
import "../style/tout.scss"

const Dinner = () => {
 

    const cards = DinnerList.map((item) => {
        return (
            <Card 
                id={item.id}
                image={item.image}
                name={item.name}
                text={item.text}
                price={item.price}
                
            />
        )
    })
    return (
        <div>
<div className='discover'> discover our Dinner </div>
            <Navigation />
            {cards}
            <Footer />
        </div>
    );
};

export default Dinner
;