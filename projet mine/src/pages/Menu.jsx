import React from 'react';

import Footer from '../component/Footer';
import Chef from "../component/chef";
import Navigation from '../component/navigation';
import "../style/tout.scss";
import { Link } from 'react-router-dom';




const Menu = () => {


    return (
        <div>
            <Navigation />
            <div className='slider'>  <div className='menu'>
                <strong>welcome to our menu </strong></div></div>
            <div className="jumbotron top-space">
                <div class="container" >
                    <div class="row">
                        <div class="col-sm" className='one' >
                            <img width="200px" height="200px" className='imagechef' src={require("../assets/image/istockphoto-533645537-612x612.jpg")} />
                            <br />
                            
                                <Link to="/breakfast"  ><button type="button" class="btn btn-secondary" className='second'>breakfast</button></Link>
                          
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <hr />
                        </div>
                        <div class="col-sm" className='one'>


                            <img width="200px" height="200px" className='imagechef' src={require("../assets/image/HummusBowl-65a0050.jpg")} />
                            <br />
                            
                                <Link to="/lunch" > <button type="button"  className='second' class="btn btn-secondary">Lunch</button></Link>
                           
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>
                        <div class="col-sm" className='one'>

                            <img width="200px" height="200px" className='imagechef' src={require("../assets/image/a.jpg")} alt="" />
                            <br />
                                <Link to="/dinner"    > <button type="button"className='second'  class="btn btn-secondary" >dinner</button></Link>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>

                    </div>
                </div>
            </div>

            <Chef />
            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default Menu;