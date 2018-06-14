import NavFull from '../src/components/nav-full';
import NavMain from '../src/components/nav-main';
import NavPreviousYears from '../src/components/nav-previous-years';
import Sponsors from '../src/components/sponsors';
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
import Diversity from '../src/components/diversity';

const PageIndex = () => (
  <div id="root">
    <hr />
    <Diversity />
    <hr />
    <Footer />
    <hr />
    <Workshops />
    <hr />
    <Workshop selectedSlug="next" />
    <hr />
    <Wot />
    <QuotesTemplates />
    <Quote />
    <Quote />
    <script src="/static/js/script.js" />
    <hr />
    <Sessions />
    <hr />
    <CodeOfConduct />
    <hr />
    <Thanks />
    <hr />
    <Locations />
    <hr />
    <Sponsors />
    <hr />
    <NavPreviousYears />
    <hr />
    <NavMain />
    <hr />
    <NavFull />
  </div>
);

export default PageIndex;
