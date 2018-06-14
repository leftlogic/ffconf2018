/* global process */
import Document, { Main, NextScript } from 'next/document';

import config from '../src/config';
import FFHead from '../src/components/head';

class FFDocument extends Document {
  static async getInitialProps({ renderPage, query, pathname }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks, query, pathname };
  }

  render() {
    const { id, version } = config;

    return (
      <html lang="en" id={id} data-version={version}>
        <head>
          <FFHead />
        </head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/js/script.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js', { scope: '/' });
// }
`
            }}
          />
        </body>
      </html>
    );
  }
}

export default FFDocument;
