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
app.post('/chekout', (req, res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const adress1 = req.body.adress1;
    const adress2 = req.body.adress2;


    db.query("INSERT INTO USERS (firstname, lastname, email, adress1,adress2) VALUES (?,?,?,?,?)", [firstname, lastname, email, adress1, adress2],
        (err, result) => {
            console.log(err)

        }
    )
})

app.listen(3001, () => { console.log("server runnig") })