import React from 'react';
import Navigation from '../component/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart} from "../redux/action/index"
import { NavLink } from 'react-router-dom';


const Cart = () => { 

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const  handleCLose= (itemCart)=>{
        dispatch(deleteCart(itemCart))
    }
    const cartItem =(props)=>{
    return (
        <div>
            
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='countainer py-4'>
                    <button className='btn-close float-end' onClick={()=>{handleCLose(props)}} aria-aria-label='close'></button>
                    <div className='row justify-content-center'>
                        <div className="col-md-4">
                            <img src={require(`../assets/image/${props.image}`)} alt={props.name} height="200px" width="200px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{props.name}</h3>
                            <p className='lead fw-bold'> {props.price} $  {state.qty}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

const emptyCart = () => {
    return (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
                </div>
            </div>
    );
}
const button = () => {
    return(
        <div className="container">
            <div className="row">
                <NavLink  to="/checkout" className="btn btn-outline-secondary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
     
            </div>
        </div>
    );

}
console.log(state.length)
   return(
       <>
         <Navigation />
         <h1>my cart</h1>
         {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItem)}
            {state.length !== 0 && button()}
       </>
   
   )
}
export default Cart;