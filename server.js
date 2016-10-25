var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require("path");
var fs = require('fs');
var logic = require('./logic');
var csv = require('csv');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));


//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /about route is requested

// add client
app.post('/add', function(req, res){
    console.log(req.body);

var client = {
      name: req.body.name || null,
      phone: req.body.phone || null,
      email: req.body.email || null,
      address: req.body.address || null,
      state: req.body.state || null,
      zip_code: req.body.zip_code || null
    };


    //Parse the newPerson into the csv
    logic.new(client, function() {
      res.status(201).send('created');
    });
});

// add cita
app.post('/citas', function(req, res){
  console.log(req.body);

var cita = {
      customer: req.body.customer || null,
      therapist: req.body.therapist || null,
      date: req.body.date || null
    };

    logic.new(cita, function() {
      res.status(201).send('created');
    });
});

//search client
app.post('/search', function(req, res){
  console.log(req.body);

  var email = (req.body.email);

  logic.search(email, function(person){
    res.status(201).send('client found');
    console.log(person);
  });

});

//update client
app.post('/update', function(req, res){
  console.log(req.body);

  var client = {
        name: req.body.name || null,
        phone: req.body.phone || null,
        email: req.body.email || null,
        address: req.body.address || null,
        state: req.body.state || null,
        zip_code: req.body.zipcode || null
      };

      logic.edit(client, function(result){
        if (result.message) {
          console.log(result.message);
          res.status(201).send('update client')
        } else {
          console.log(result.error);
        }
      });
});

//show client
app.get('/csv', function(req, res){
  logic.list(function(data){
    res.send( { 'data':  data});

  });
});



// delete client
app.post('/remove', function(req, res){
  console.log(req.body);

  var email =(req.body.email);

  logic.delete(email, function(result){
    //res.status(201).send('result');
    console.log(result);
    res.status(201).send('delete');

  });
});

app.all('*', function(request, response) {
  response.status(404).send('I dont know this url');
});

app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});
