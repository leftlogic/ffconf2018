const express = require('express');
const app = express();
const { config } = require('./package.json');
const out = config.outputFolder;

app.use('/static', express.static(`${__dirname}/${out}/static`));
app.use('/', express.static(`${__dirname}/${out}`));

if (module.parent) {
  module.exports = app;
} else {
  app.listen(process.env.PORT);
}
