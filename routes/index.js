var express = require('express');
var router = express.Router();
var calls = require('../data/api_query');


router.get('/', (req, res) => {
  res.render('index')
});



// API CALLS
router.post('/API_GET', (req, res) => {

  async function return_api_value() {
    var inputIP = req.body.inputIP;
    var inputPort = req.body.inputPort;
    var inputDir = req.body.inputDir;
    var api_val = await calls.call_api(inputIP, inputPort, inputDir)
    return api_val;
  };

  async function render_view() {
    var resu = await return_api_value();
    if (!resu) {
      //return 'Error de conexión';
      message1 = 'Error de conexión';
      console.log("\x1b[1m",'valor de message1 ANTES: ' + JSON.stringify(message1));
      res.render('index', {
        message: JSON.stringify(message1)
      });
    } else {
      message1 = resu ; 
      console.log("\x1b[1m",'valor de message1 DESPUES: ' + JSON.stringify(message1));
      res.render('index', {
        message: JSON.stringify(message1)
      });
    };

  };
render_view();


});


module.exports = router;