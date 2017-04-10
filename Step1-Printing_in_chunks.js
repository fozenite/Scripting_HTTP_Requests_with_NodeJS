
// IMPORT HTTP MODULE
var https = require('https');




function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    //set encoding of received data to UTF-8
    response.setEncoding('utf8');


    // Call back invoked when a 'data' chunk is received
    response.on('data', function (data) {
      console.log('Chunk received' + data + '\n');
    });

    //Callback invoked when all the data has been received and it is end of stream

    response.on('end', function() {
      console.log('Response stream complete.');

    });


  });

}

getAndPrintHTMLChunks();





