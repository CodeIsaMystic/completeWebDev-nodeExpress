/**
 * Building an express server
 * 
 * 1- npm install express
 * 2- require('express')
 * 3- const app init
 * 4- app.listen(port)
 */
const express = require('express');

const app = express();






/**
 * More complex.. with differents pointer
 *
 * 
app.get('/', (req, res) => {
  res.send('Getting the root location');
});

app.get('/profile', (req, res) => {
  res.send('Getting the profile location');
});

app.post('/profile', (req, res) => {
  // using json content/type 
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  };

  res.send(user);
});
*/

/**
 * Simple... 
 * 
 * to get GET req with express 
 *  
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
});*/


app.listen(3000);