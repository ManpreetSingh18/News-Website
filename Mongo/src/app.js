const express = require("express");
const path=require("path");
const app = express();
require("./db/conn")
const Register=require("./models/registers");

const bcrypt = require("bcryptjs");

const hbs =require("hbs");

const port= process.env.PORT || 3000;
let alert = require('alert'); 
// var popup = require('popups');

// console.log(path.join(__dirname, "../../"))

const static_path=path.join(__dirname,"../..");
const template_path=path.join(__dirname,"../templates/views");
// const template_path2=path.join(__dirname,"../..");
const partials_path =path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path))
// app.set("view engine","hbs");
app.set("view engine","hbs");
app.set("views",template_path);
// app.set("views",template_path2);
hbs.registerPartials(partials_path);

// app.get('/', function(req,res) {
//  res.sendFile(static_path + "/index.html");
// })


app.get("/",(req,res) => {
    res.render("index",{
        mdate : myDate
    });
});

app.get("/register",(req,res) => {
    res.render("register",{
        
    });
});

app.get("/login",(req,res) => {
    res.render("login");
});

// create new user in db
app.post("/register",async (req,res) => {
    try {
        // console.log(req.body.first_name);
        // res.send(req.body.first_name);
        const password = req.body.password;
        const cpassword= req.body.confirm_password;
        const fname= req.body.first_name;
        if(password == cpassword){
            const registerEmployee = new Register({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                confirm_password: cpassword
            })
            //Password hashing

            const registered=await registerEmployee.save();
            res.status(201).render("index");
            // res.send("Hello "+req.body.first_name)
        }else{
            res.send("Password are not matching")
        }
    }catch(error){
        res.sendStatus(400).send(error);
    }
});


// Login check

app.post("/login", async(req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // console.log(`${email} and password is ${password}`)
        // use for Promise 
        const useremail = await Register.findOne({email:email});
        
       var k= bcrypt.compareSync(password, useremail.password);
       console.log(k);
        if(k){
            // res.send(alert("Login Succesfully"));
            
            res.status(201).render("index");
            alert("Login Succesfully")
           
        }else{
            res.send("Invalid Login Details");
        }
    } catch (error) {
        res.status(404).send("invalid Login Details")
    }
})

//Time on Index Page
const moment= require('moment');
var myDate = moment().format('MMMM Do YYYY, h:mm:ss a');


app.listen(port,() =>{
    console.log(`Server running at port no ${port}
    `)
})
 