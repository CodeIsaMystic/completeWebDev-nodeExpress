/**
 * Some others Modules (global to node)
 * 
 * FileSystem
 const usedToHandleTextFile = require('fs');
 console.log(usedToHandleTextFile);
 
 const usedToHandleTextFile = require('fs').readFile;
 will output the content of the file ...

 *Http 
 const usedTobuiltAserver = require('http');
 console.log(usedTobuiltAserver);
 */




/**
 * Import Modules
 * return unexpected token => node need the es6 pack
 * 
 //import largeNumber from 'script2';
const script2 = require('./script2');


const a = script2.largeNumber;
const b = 5;
*/





/**
 *  bash : node script3.js
 * 
 
const a = 4;
const b = 5;

console.log(a + b);
*/ 




/**
 *  bash : node script3.js, the program runs after 3s delay
 
const a = 4;
const b = 5;

setTimeout(() => {
  console.log(a + b);
}, 3000);
*/







/**
 *  bash : node script3.js
 * 
 * display the current dir
 * 
 * 
 console.log(__dirname);
 */
 
