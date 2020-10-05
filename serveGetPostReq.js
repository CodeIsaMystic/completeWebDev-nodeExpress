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
 *
 *  using middleware to get body req
*/

app.use(bodyParser.urlencoded({ extended: false }));
// to post form classic data x-www-form-urlencoded

app.use(bodyParser.json());
// to post json data
// Content-type   application/json
 



 
 
app.get('/', (req, res) => {
  res.send('Getting the root location');
});

app.get('/profile', (req, res) => {
  res.send('Getting the profile location');
});



app.post('/profile', (req, res) => {
  console.log(req.body);
  /**
   *  body
   * 
   *   x-www-form-urlencoded  
   *     key: name  value:jowd
   * 
   *   raw
   *      {
   *        "name": "jowd",
   *        "hobby": tennis
   *      }
   *  */ 


res.send('Success');
   
  /* no need anymore
    just to GET request some data 
    & to test it
    (using json content/type )
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  };

  res.send(user);
  */
});



app.listen(3000);