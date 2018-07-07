/* global process */
import Document from 'next/document';

import config from '../src/config';
import FFHead from './_head';
import FFMeta from './_meta';
import FFMain from './_main';
import FFNextScript from './_nextscript';

class FFDocument extends Document {
  static async getInitialProps({ renderPage, query, pathname }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks, query, pathname };
  }

  render() {
    const { id, version } = config;

    return (
      <html lang="en" id={id} data-version={version}>
        <FFHead>
          <FFMeta />
        </FFHead>
        <body>
          <FFMain />
          <FFNextScript />
          <script src="/static/js/script.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js', { scope: '/' });
// }
`,
            }}
          />
        </body>
      </html>
    );
  }
}

export default FFDocument;
