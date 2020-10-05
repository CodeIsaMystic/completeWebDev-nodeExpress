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
 * To serve Simple Static assets
 *  => load a static page
 *  => will load css & js if there are
 */

app.use(express.static(__dirname + '/public'));









app.listen(3000);