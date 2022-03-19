import React , { useState } from 'react';
import "../style/tout.scss"
import axios from 'axios';

import{ init } from '@emailjs/browser';
init("user_VMZRY92tzhFdreGcj3veP");



function ContactUs(props){


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const register =()=>{
        console.log()
        axios.post('http://localhost:3001/contact',{
        name:name,
        subject:subject,
        email:email,
        message:message
    }
        )
    }

    

return (
   < div>
    <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr/>
                                <form id="contact-form"  
                                   >
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name"  id="name"  value={name} onChange={(e)=>{setName(e.target.value)}} type="text" 
                                       className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                    />
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject" value={subject} onChange={(e)=>{setsubject(e.target.value)}} id="subject" type="text"
                                      className="form-control"
                                      />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message" value={message} onChange={(e)=>{setmessage(e.target.value)}} id="message" 
                                       className="form-control" rows="1" 
                                       />
                                </div>
                                <button type="button" className='table66' onClick={register}>Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

      </div>
        
            
     
);
    
    }
export default ContactUs;