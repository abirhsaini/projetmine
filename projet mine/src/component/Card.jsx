import React from 'react';
import "../style/tout.scss"

import { useSelector,useDispatch } from 'react-redux';
import {addCart} from "../redux/action"


const Card = (props) => {
    
    
        const dispatch =useDispatch();
        const addProduct =(product)=>{
          dispatch(addCart(product));
    
        }
    
    return (
        <>
        
    
        <div className='break'>
            <div class="card p-0 overflow-hidden h-100 shadow" className='card'>

                <img class="card-img-top" src={require(`../assets/image/${props.image}`)} alt="Card image cap" />
                <div class="card-body" className='cardindo'>
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.text}</p>
                    <p   class="card-text"> {props.price} $</p>
                    <button class="btn btn-primary" onClick={() => addProduct(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
        </>
    );
};


export default Card;