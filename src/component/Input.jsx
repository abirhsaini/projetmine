import React , { useState } from 'react';
import{ init } from '@emailjs/browser';
import "../style/tout.scss";
init("user_VMZRY92tzhFdreGcj3veP");


function Input(props){


    const [name, setName] = useState("");
    const [date1, setDate] = useState("");
    const [number1, setPhone] = useState("");
    const [email1, setEmail] = useState("");
    const [time1, setTime] = useState("");
    const [personne1, setPersonne] = useState("");
function Bbb(e) {
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var number = document.getElementById("number");
    var name1 = document.getElementById("name");
    
    if (!email.checkValidity()) {
        alert(" email est incorrecte veuillez entrer un email correcte ");
    }
    if (!date.checkValidity()) {
        alert(" date est incorrecte veuillez entrer une date correcte ");
    }
    if (!time.checkValidity()) {
        alert("time est incorrecte veuillez entrer un horaire correcte ");
    }
    if (!number.checkValidity()) {
        alert("veuiller entrer le nombre des personnes");
    }
    if (!name1.checkValidity()) {
        alert("veuiller entrer votre nom");

    }
    if (email.checkValidity() && date.checkValidity() && number.checkValidity() && time.checkValidity() && name1.checkValidity()) {
        alert("merci , votre demande est enregistré");
        e.preventDefault();

        sendFeedback("template_ysxyycn", {
          name,
          date1,
          number1,
          email1,
          time1,
          personne1,
        });
      };

        
    }


const sendFeedback = (templateId, variables) => {

    window.emailjs
        .send("service_hcsupv9", templateId, variables)
          .then((res) => {
            console.log('success !');
            setName("");
            setDate("");
            setPhone("");
            setEmail("");
            setTime("");
            setPersonne("");

          })
        };

    

return (
   < div>

       <div className='block1'>
        <div className='name' >
        <label > full name: </label>
                <input type="text " id="name" onChange={(e) => setName(e.target.value)} placeholder="name" size="10 "  required />
            </div>
            <div className='name'> 
            <label for="exampleInputEmail1">Email address :</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="--@--.--" size="10 " required />
            </div>
            <div className='name'>
            <label > phone: </label>
                <input type="text" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="phone" size="10 " required />
            </div>
            
          
                <div className='name'>
            <label > date:</label>

                <input type="date" id="date" onChange={(e) => setDate(e.target.value)} placeholder="AAAA-MM-DD" min="2021-01-01" max="2022-12-31" required/>
            </div>
            <div className='name'>
            <label > time: </label>

                <input type="time" id="time" placeholder="appt" onChange={(e) => setTime(e.target.value)} min="09:00" max="18:00" required />
            </div>
            <div className='name'>
                <label > number of person: </label>
                <input type="number" id="number" onChange={(e) => setPersonne(e.target.value)} placeholde="number of people " size="10 " required />
            
            </div>
            <div className='name' >
            

                <button  className="table66"  onClick={Bbb}>{props.state}</button>
            </div></div>
        </div>
            
     
);
    
    }
export default Input;