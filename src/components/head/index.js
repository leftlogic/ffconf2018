import { Fragment } from 'react';

import config from '../../config';
import test from './test';

const FFHead = ({ assetPrefix }) => {
  const { themeColor, ticketPrice, year, version, dates, analytics } = config;
  const a = `(${test.toString()})(${dates});`;

  return (
    <Fragment>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="description"
        content="ffconf 2017 is a one day JavaScript Conference at the Duke of York’s Picturehouse in Brighton, UK run on 9th and 10th November 2017"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content={themeColor} />
      <meta name="apple-mobile-web-app-title" content={`ffconf ${year}`} />
      <meta name="application-name" content={`ffconf ${year}`} />

      <title>ffconf :: JavaScript Conference :: 9th & 10th November 2017</title>

      {/* facebook open graph tags */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={`https://${year}.ffconf.org/`} /> */}
      <meta property="og:title" content="ffconf :: JavaScript Conference" />
      <meta
        property="og:description"
        content="Care about the web? ffconf is curated for you. One day affordable event. 8 amazing sessions, check out the web site today!"
      />
      <meta
        property="og:image"
        content={`https://${year}.ffconf.org/images/twitter-card-280x150.png`}
      />

      {/* twitter card tags additive with the og: tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ffconf" />
      <meta name="twitter:creator" content="@rem" />
      <meta name="twitter:domain" value="ffconf.org" />
      <meta name="twitter:title" content="ffconf :: JavaScript Conference" />

      <meta
        name="twitter:description"
        value={`Care about the web? ffconf is curated for you. One day event in Brighton, UK. 8 amazing sessions, limited tickets @ £${ticketPrice}`}
      />
      <meta
        name="twitter:image"
        content={`https://${year}.ffconf.org/static/images/twitter-card-280x150.png`}
      />
      <meta name="twitter:url" value={`https://${year}.ffconf.org`} />
      <meta
        name="twitter:label1"
        value="Tickets available - set your alarms!"
      />
      <meta name="twitter:data1" value="20-July 10am" />
      <meta name="twitter:label2" value="When? Twice!" />
      <meta name="twitter:data2" value={`9 & 10-Nov @ £${ticketPrice}`} />

      <link
        rel="stylesheet"
        href={`${assetPrefix}/static/css/style.css?${version}`}
      />
      <link
        rel="stylesheet"
        href={`${assetPrefix}/static/css/adjustments.css?${version}`}
      />
      <link
        rel="all-the-source"
        href={`https://github.com/leftlogic/ffconf${year}`}
      />
      <link rel="author" href={`${assetPrefix}/static/humans.txt`} />
      <link rel="manifest" href={`${assetPrefix}/static/manifest.json`} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${assetPrefix}/static/images/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${assetPrefix}/static/images/favicons/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${assetPrefix}/static/images/favicons/favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href={`${assetPrefix}/static/images/favicons/safari-pinned-tab.svg`}
        color={themeColor}
      />
      <link
        rel="shortcut icon"
        href={`${assetPrefix}/static/images/favicons/favicon.ico`}
      />
      <meta
        name="msapplication-config"
        content={`${assetPrefix}/static/images/favicons/browserconfig.xml`}
      />

      {/* <div
        name="react-comment-hack"
        dangerouslySetInnerHTML={{
          __html: `<!--[if lt IE 9]><script src="${assetPrefix}/static/js/html5shiv.min.js" /><![endif]-->`
        }}
      /> */}

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
          function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
          e=o.createElement(i);r=o.getElementsByTagName(i)[0];
          e.src='https://www.google-analytics.com/analytics.js';
          r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
          ga('create','${analytics}','auto');ga('send','pageview');`
        }}
      />

      <script dangerouslySetInnerHTML={{ __html: `${a}` }} />
    </Fragment>
  );
};

export default FFHead;