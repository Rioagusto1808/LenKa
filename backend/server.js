import express from "express";
import mysql from "mysql";
import cors from "cors";
import FileUpload from "express-fileupload";
import ProductRoute from './ProductRoute.js'
import ProductRoute_vid from './ProductRoute_vid.js'


const app =  express();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use(ProductRoute_vid);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("success");
        }else {
            return res.json("failed");
        }
    })
})

app.listen(8081, () => {
    console.log("Server Connecting");
});