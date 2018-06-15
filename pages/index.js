/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Hack" }]*/
import Hack from '../src/components/hack';
import Layout from '../src/components/layout';
import Sessions from '../src/components/sessions';
import Workshops from '../src/components/workshops';
import Locations from '../src/components/locations';
import Diversity from '../src/components/diversity';
import Thanks from '../src/components/thanks';
import Quote from '../src/components/quote';

const PageIndex = () => {
  return (
    <Layout>
      <Sessions />
      <Quote />
      <Workshops />
      <Quote />
      <Locations />
      <Quote />
      <Diversity />
      <Thanks />
      <Quote />
    </Layout>
  );
};

PageIndex.getInitialProps = () => {
  return {};
};

export default PageIndex;
