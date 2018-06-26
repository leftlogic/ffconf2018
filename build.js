const shell = require('shelljs');

const { config, version } = require('./package.json');
const { outputFolder } = config;

const build = ({ outputFolder, version }) => {
  shell.echo('building static files:');

  shell.echo('removing build directory');
  shell.rm('-rf', outputFolder);

  shell.echo('running next build');
  shell.exec(`${__dirname}/node_modules/.bin/next build`);

  shell.echo('running next export');
  shell.exec(`${__dirname}/node_modules/.bin/next export -o ${outputFolder}`);

  shell.echo('copying sw.js file');
  shell.cp('static/js/sw.js', outputFolder);

  shell.echo('replacing version in sw.js file');
  shell.sed('-i', '@VERSION@', version, `${outputFolder}/sw.js`);

  shell.echo('copying style.css file');
  shell.cp(`${outputFolder}/_next/static/style.css`, `${outputFolder}/static`);

  shell.echo('removing _next directory');
  shell.rm('-rf', `${outputFolder}/_next`);

  shell.echo('done building static files');
};

if (module.parent) {
  module.exports = build;
} else {
  build({ outputFolder, version });
}
