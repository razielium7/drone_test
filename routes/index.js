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
      message1 = 'Error de conexión';
      res.render('index', {
        message_error: message1
      });
    } else {

      message1 = resu;
      res.render('index', {
       // message_result: message1.join('%')
        message_result: message1
      });
    };
  };
  render_view();
});
module.exports = router;