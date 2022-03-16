import React from 'react';
import Navigation from '../component/navigation';
import BreakList from "../DataBreakfast";
import Card from "../component/Card.jsx";
import Footer from '../component/Footer';
import  {useCart}  from 'react-use-cart';

import "../style/tout.scss"

const Break = () => {
    
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    const cards = BreakList.map((item) => {
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
<div className='discover'> discover our Breakfast </div>
            <Navigation />
            {cards}
            <br />

            <a href="/cart"  > <div className='third'> go to your cart </div></a>
           < h1>Cart ({totalUniqueItems})</h1>
           <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
            <Footer />
        </div>
    );
};

export default Break;