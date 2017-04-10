
// IMPORT HTTP MODULE
var https = require('https');




function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var dataBuffer ="";
  /* Add your code here */
  https.get(requestOptions, function(response) {

    //set encoding of received data to UTF-8
    response.setEncoding('utf8');


    // Call back invoked when a 'data' chunk is received
    response.on('data', function (data) {
      dataBuffer += data;
    });

    //Callback invoked when all the data has been received and it is end of stream

    response.on('end', function() {
      console.log(dataBuffer);
      console.log('Response stream complete.');

    });


  });

}

getAndPrintHTML();