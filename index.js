var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const html = __dirname + "/client/dist/"
const port = process.env.PORT || 80;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(html));

app.get('/*', function (req, res) {
  res.sendFile(path.join(html,'index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development')
{
  app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
  });
}
module.exports = app;
