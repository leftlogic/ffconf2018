/* global process */
import Document, { Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const { assetPrefix } = this.props.__NEXT_DATA__;
    return (
      <html lang="en">
        <head>
          <title>
            ffconf :: JavaScript Conference :: 8th &amp; 9th November 2018
          </title>
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Language" content="en-us" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu+Mono"
            rel="stylesheet"
          />

          {/* <link rel="stylesheet" href={`${assetPrefix}/static/style.css`} /> */}
          {process.env.ANALYTICS && (
            <script>
              {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '{process.env.ANALYTICS}', 'auto');
        ga('send', 'pageview');`}
            </script>
          )}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
