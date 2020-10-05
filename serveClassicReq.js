/**
 * Building an express server
 *
 * 1- npm install express
 * 2- require('express')
 * 3- const app init
 * 4- app.listen(port)
 */
const express = require('express');

/**
 * To Grab & parse infos
 */
const bodyParser = require('body-parser');



const app = express();

/**
 * More complex.. 
 *
 */ 
 
app.get('/', (req, res) => {
  res.send('Getting the root location');
});

app.get('/profile', (req, res) => {
  res.send('Getting the profile location');
});

app.post('/profile', (req, res) => {
  console.log(req.body);


   
  /**
     no more needed
    needed to GET some data & to test it
    using json content/type 
   *
   */ 
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  };

  res.send('Success');
});




/**
 * Middleware concept
 * 
 * handling first the req
 * then with next() method
 * go to the next .get req
 * 
 */
app.use((req, res, next) => {
  console.log('<h1>Hello!!!</h1>');
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Test One two, One two!</h1>');
});


/**
 * Simple... 
 * 
 * to get GET req with express 
 */ 

app.get('/', (req, res) => {

  //res.send("Hellloooo!");

  // using html tag 
  res.send('<h1>Hellloo!</h1>');

  // using json content/type 
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  };

  res.send(user);
});

app.listen(3000);
