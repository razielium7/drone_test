var request = require('request')





var currURL = 'http://192.168.12.162:9200/_cat/indices';

var resback = [];
request(currURL, function(error, response){
    resback_string = response.body;
    resback = resback_string.split('\n');
    console.log(resback);
    console.log(resback[6]);
   //console.log(resback[1]);
   //console.log(resback[2]);
   //console.log(resback[3]);
   //console.log(resback[4]);
   //console.log(resback[5]);
   //console.log(resback[6]);
});