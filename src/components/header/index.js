import Link from 'next/link';
import moment from 'moment';

import NavMain from '../nav-main';

import config from '../../config';

const { dates, year, ticketUrl, videos } = config;
const [date1, date2] = dates;
const momentDate1 = moment(date1);
const momentDate2 = moment(date2);
const when = `${momentDate1.format('Do')} & ${momentDate2.format('Do MMMM')}`;
const { phase, soldout } = config.config;

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a className="logo__link" aria-label="f f conf">
          <img
            className="logo__image"
            src="/static/images/logo.png"
            alt={`ffconf ${year}`}
          />
        </a>
      </Link>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="intro">
      <p className="intro__text">
        <strong className="intro__title">#FFConf</strong>
      </p>
      <p className="intro__text">Repeated Twice</p>
      <p className="intro__text">{when}</p>
      <p className="intro__text">Duke of York’s Picturehouse, Brighton, UK </p>
    </div>
  );
};

const BuyButton = () => {
  let buy = false;
  let buttonText = '';

  if (phase < 1) {
    // TODO: on sale text
    buttonText = 'On sale 20 July';
  } else if (phase >= 1 && phase <= 3) {
    if (soldout.conference) {
      buttonText = 'Sold Out';
    } else {
      buy = true;
      buttonText = 'Buy Tickets';
    }
  }

  if (!buttonText) {
    return null;
  }

  if (buy) {
    return (
      <a href={ticketUrl} target="_blank" rel="noopener" className="">
        {buttonText}
      </a>
    );
  }

  return <span className="">{buttonText}</span>;
};

const VideoButton = () => {
  if (phase < 4) {
    return null;
  }

  if (videos) {
    return (
      <a href={videos} target="_blank" rel="noopener" className="">
        Watch Now
      </a>
    );
  }

  return <span className="">Watch Soon</span>;
};

const Header = () => {
  return (
    <header className="header" role="banner">
      <Logo />
      <Intro />
      <BuyButton />
      <VideoButton />
      <NavMain />
    </header>
  );
};

export default Header;
