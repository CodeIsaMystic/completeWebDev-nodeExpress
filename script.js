const fs = require('fs');


/**
 * readFile is Asynchronous
 * with a Callback function
 * 
 * maybe a preference...
 */
fs.readFile('./hello.txt', (err, data) => {
  if(err) {

    console.log('Async', 'There is an Errror');

  }

  //console.log('Async', data); => buffer
  //console.log('Async' ,data.toString());  => ok by default
  console.log('Async', data.toString('utf8'));
});


/**
 * readFileSync is Synchronous
 * 
 * it seems better to use a Async method cos' we do not know
 * how long is the file or eventually how long it could be
 * as he stay , waiting the right time to be readed
 */
const file = fs.readFileSync('./hello.txt');
//console.log('Sync', file); => buffer
console.log('Sync', file.toString());

/**
 * Append data to a file 
 * 
 * is the first param create the file 
 * if it do not exist!???
 *
fs.appendFile('./hello.txt', ' You are all so Good!!', err => {
  if(err) {
    console.log(err);
  }
});
*/


/**
 * Write data to a file 
 * 
 * is the first param create the file 
 * if it do not exist!???
 *
fs.writeFile('./bye.txt', "Hey!! Here's the Magic", err => {
  if(err) {
    console.log(err);
  }
});
*/


/**
 * Delete file 
 * 
 */
fs.unlink('./bye.txt', err => {
  if(err) {
    console.log(err);
  }
  console.log('Inception');
});













// run node script.js