

const express = require('express')
var indexRouter = require('./routes/index');
const app = express();
const port = 3001




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/', indexRouter);





