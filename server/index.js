const express = require("express");
const mysql = require("mysql");
const cors = require("cors")


const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    password: "aseds",
    host: "localhost",
    database: "login"
})
app.post('/checkout', (req, res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const adress1 = req.body.adress1;
    const adress2 = req.body.adress2;
    const total = req.body.total;


    db.query("INSERT INTO USER (user_name, user_lastname, email,adress1,adress2,total) VALUES (?,?,?,?,?,?)", [firstname, lastname, email, adress1, adress2, total],
        (err, result) => {
            console.log(err)
            res.send("jij")

        }
    )
})
app.post('/reservation', (req, res) => {

    const name = req.body.name;
    const date1 = req.body.date1;
    const email = req.body.email;
    const time1 = req.body.time1;
    const personne1 = req.body.personne1;
    const number1 = req.body.number1;


    db.query("INSERT INTO  reservation  (name_user,email,phone,date,time,number_people) VALUES (?,?,?,?,?,?)", [name, email, number1, date1, time1, personne1],
        (err, result) => {
            console.log(err)
            res.send("jij")

        }
    )
})

app.post('/contact', (req, res) => {

    const name = req.body.name;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message;



    db.query("INSERT INTO  contact  (name_user,email, subject , message) VALUES (?,?,?,?)", [name, email, subject, message],
        (err, result) => {
            console.log(err)
            res.send("jij")

        }
    )
})
app.listen(3001, () => { console.log("server runnig") })