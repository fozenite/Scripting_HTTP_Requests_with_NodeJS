module.exports = function getHTML (options, callback) {


    /* Your code here */
  var https = require('https');
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
};