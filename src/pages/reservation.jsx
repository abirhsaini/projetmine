import React from 'react';
import ReactDOM  from 'react-dom';
import Footer from '../component/Footer';
import Input from '../component/Input';
import Navigation from '../component/navigation';
import "../style/tout.scss"


const Reservation = () => {
    return (
        <div >
            <Navigation  />
           <div className='book'> yidzzzzz</div>
            <div className=""><Input state="book a table" /></div>
            
 <Footer/>
            </div>
           
    );
};


export default Reservation;