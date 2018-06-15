// remove next.js custom stuff
// https://github.com/zeit/next.js/issues/3155#issuecomment-338708632
import { NextScript } from 'next/document';

class StaticNextScript extends NextScript {
  render() {
    return null;
  }
}
// TODO: use NODE_ENV
const FFNextScript =
  process.env.GIULIA === 'production' ? StaticNextScript : NextScript;

export default FFNextScript;
