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
                    //var resback = ""[]"";
                    //console.log('ESA ES LA RESPUESTA COMPLETA: '+JSON.stringify(response  ));
                    var resback = response.body.replace(/\n/g,'AAAAAAAAAAAA');
                    // !!! SUSTITUYE TODAS APARIENCIAS DE \n por AAAAAAAA
                    //var resback = response.body;
                    //var resback = response.body.split('\n');
                    //resback = response.body;

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