
// IMPORT HTTP MODULE
var https = require('https');



function getHTML (options, callback) {

  /* Add your code here */
  var dataBuffer ="";
  /* Add your code here */
  https.get(options, function(response) {

    //set encoding of received data to UTF-8
    response.setEncoding('utf8');


    // Call back invoked when a 'data' chunk is received
    response.on('data', function (data) {
      dataBuffer += data;
    });

    //Callback invoked when all the data has been received and it is end of stream

    response.on('end', function() {
      callback(dataBuffer);
      console.log('Response stream complete.');

    });


  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)