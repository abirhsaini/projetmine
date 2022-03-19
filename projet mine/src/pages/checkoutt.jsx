import React from 'react';
import Navigation from '../component/navigation';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useState } from 'react';


const Checkoutt = () => {
const register =()=>{
    console.log(firstname)
    axios.post('http://localhost:3001/checkout',{
    firstname:firstname,
    lastname:lastname,
    email:email,
    adress1:adress1,
    adress2:adress2,
    total:total
}
    )
}

    const state = useSelector((state) => state.handleCart);
    const [firstname,setfirstname]= useState('');
    const [email, setemail] = useState("");
    const [adress1, setadress1] = useState("");
    const [adress2, setadress2] = useState("");
    const [lastname, setlastname] = useState("");
    
    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }
    return (
        
        <div>
            <Navigation  />
            <br />
            <br />
            <br />
            <div className="container my-5">
        <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">{state.length}</span>
                </h4>
                <ul className="list-group mb-3">
                    {state.map(itemList)}

                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>${total}</strong>
                    </li>
                </ul>

               
              
            </div>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" noValidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label" >First name</label>
                            <input type="text" className="form-control" id="firstName" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} placeholder="" required="" />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value={lastname} onChange={(e)=>{setlastname(e.target.value)} }required="" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="username" className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text">@</span>
                                <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                <div className="invalid-feedback">
                                    Your username is required.
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                            <div className="invalid-feedback">
                                Please enter a valid email address htmlFor shipping updates.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={adress1}  onChange={(e)=>{setadress1(e.target.value)}}required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" value={adress2} onChange={(e)=>{setadress2(e.target.value)}} placeholder="Apartment or suite" />
                        </div>

                       
                    </div>

                    <hr className="my-4" />

                   
                    <h4 className="mb-3">Payment</h4>

                    


                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary btn-lg" type="button" onClick={register}>Continue to checkout</button>
                </form>
            </div>
        </div>
    </div>

        </div>
    );
};

export default Checkoutt;