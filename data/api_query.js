var request = require('request');
const app = require('../../app_src/app');

var call_api = async (api_IP, api_port, api_dir) => {
    // var currURL = 'http://192.168.12.162:9200/_cat/indices';  - EXAMPLE
    var currURL = 'http://' + api_IP + ':' + api_port + api_dir;
    console.log(currURL);
    var api_response = request(currURL, function (error, response) {
        try {
            if (!response) {
                console.log("\x1b[33m", 'Respuesta vacia: ')
                console.log(error);
            } else {
                var resback = [];
                resback = response.body.split('\n');

                console.log("\x1b[32m", "RESPUESTA DE API:  " + resback);
                return resback;
            }
        }
        catch (error) {
            console.log("\x1b[33m", 'A wild error appears! : ' + error);
        }

    });
    console.log("\x1b[33m", ' !!! VALOR DE LLAMADA : ' + JSON.stringify(api_response));
    return api_response;
};



// call_api('192.168.12.162', '9200', '/_cat/indices');
module.exports = {
    call_api: call_api
}