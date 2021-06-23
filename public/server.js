const express = require('express');
const fs = require('fs');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');

const PORT = 3000;
//var keys = ['name', 'email', 'password', 'confirmpasswrod'];

// An array of values 


// Object created 
var obj = {};

//Show input error message
var names;
var emails;
var pass;
var passw;
var values = [];

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('css'))
app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.set('view engine', 'js');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});


app.post('/upload', function (req, res) {

    names = req.body.username;
    emails = req.body.email;
    pass = req.body.password;
    passw = req.body.password2;
    
    
    res.redirect("/ping")

});



app.get('/ping', function (req, res) {

    // An array of keys 

    // Using loop to insert key 
   
 values.push({name:names,
     email:emails,
      pas:pass,
    passs:passw});

console.log(values);

   






    // Printing object 
  //  console.log(demo)

    fs.writeFile("users.json", JSON.stringify(values), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
    });
    

});




app.listen(process.env.PORT || PORT, function () {
    console.log('Magic On ', PORT); // eslint-disable-line
});