var request = require('request');
const app = require('../app');


var call_api = async (api_IP, api_port, api_dir) => {
    // var currURL = 'http://192.168.12.162:9200/_cat/indices';  - EXAMPLE
    var final_response = new Promise(function (resolve, reject) {
        var currURL = 'http://' + api_IP + ':' + api_port + api_dir;
        console.log(currURL);
        request(currURL, function (error, response) {
            try {
                if (!response) {
                    console.log("\x1b[33m", 'Respuesta vacia: ')
                    console.log(error);
                    resolve();
                } else {
                    var resback = [];
                    resback = response.body.split('\n');
                    //resback = response;

                    //console.log("\x1b[32m", "RESPUESTA DE API:  " + resback);
                    //return resback;
                    resolve(resback);
                }
            }
            catch (error) {
                //console.log("\x1b[33m", 'A wild error appears! : ' + error);
                resolve();
            }
        });
    });
    return final_response;
};



// call_api('192.168.12.162', '9200', '/_cat/indices');
module.exports = {
    call_api: call_api
}