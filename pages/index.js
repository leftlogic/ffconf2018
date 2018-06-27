/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Hack" }]*/
import fetch from 'isomorphic-fetch';

import Hack from '../src/components/hack';
import Layout from '../src/components/layout';
import Sessions from '../src/components/sessions';
import Workshops from '../src/components/workshops';
import Locations from '../src/components/locations';
import Diversity from '../src/components/diversity';
import Quote from '../src/components/quote';

import config from '../src/config';

const { year } = config;

const PageIndex = ({ schedule }) => {
  return (
    <Layout>
      <Sessions schedule={schedule} />
      <Quote />
      <Workshops />
      <Quote />
      <Locations />
      <Quote />
      <Diversity />
    </Layout>
  );
};

PageIndex.getInitialProps = async () => {
  const res = await fetch(
    `https://ffconf.org/api/event/${year}`
    // `https://gist.githubusercontent.com/electricg/da1505d48e3aef90655f5536bae8399c/raw/fd7533dfaaefb8b758d9c832ad6dcf8ab286cdd1/${year}.json`
  );
  const data = await res.json();
  return { schedule: data };
};

export default PageIndex;
