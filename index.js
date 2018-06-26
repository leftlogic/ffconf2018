/* eslint no-console: off */
const express = require('express');
const app = express();

const build = require('./build');

const port = process.env.PORT || 9000;

const { config, version } = require('./package.json');
const { outputFolder } = config;

app.use('/', express.static(`${__dirname}/${outputFolder}`));

build({ outputFolder, version });

if (module.parent) {
  module.exports = app;
} else {
  app.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`Ready on http://localhost:${port}`);
  });
}
