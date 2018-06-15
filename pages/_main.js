// remove next.js custom stuff
// https://github.com/zeit/next.js/issues/3155#issuecomment-338708632
import { Fragment } from 'react';
import { Main } from 'next/document';

// TODO: use NODE_ENV
class FFMain extends Main {
  render() {
    const { html, errorHtml } = this.context._documentProps;
    const id = process.env.GIULIA !== 'production' ? '__next' : false;

    return (
      <Fragment>
        <div
          id={id}
          className="ffconf-wrapper"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {process.env.GIULIA !== 'production' && (
          <div
            id="__next-error"
            dangerouslySetInnerHTML={{ __html: errorHtml }}
          />
        )}
      </Fragment>
    );
  }
}

export default FFMain;
