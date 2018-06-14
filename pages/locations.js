import Locations from '../src/components/locations';
import Thanks from '../src/components/thanks';
import CodeOfConduct from '../src/components/code-of-conduct';
import Sessions from '../src/components/sessions';
import Quote from '../src/components/quote';
import QuotesTemplates from '../src/components/quotes-templates';
import Wot from '../src/components/wot';
import Workshop from '../src/components/workshops/workshop';
import Workshops from '../src/components/workshops';
import Footer from '../src/components/footer';

import NavFull from '../src/components/nav-full';
import NavMain from '../src/components/nav-main';

const PageIndex = () => (
  <div id="root">
    <NavMain />
    <hr />
    <NavFull />
    <hr />
    <Locations />
  </div>
);

export default PageIndex;
