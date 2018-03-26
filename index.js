const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/static'));

if (module.parent) {
  module.exports = app;
} else {
  app.listen(process.env.PORT);
}
