import Layout from '../src/components/layout';
import Sessions from '../src/components/sessions';
import Workshops from '../src/components/workshops';
import Locations from '../src/components/locations';

const PageIndex = () => {
  return (
    <Layout>
      Home
      <Sessions />
      <Workshops />
      <Locations />
    </Layout>
  );
};

export default PageIndex;
