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

const PageIndex = () => (
  <div id="root">
    <Wot />
    <QuotesTemplates />
    <Quote />
    <Quote />
    <script src="/static/js/script.js" />
    <Sessions />
    <CodeOfConduct />
    <Thanks />
    <Locations />
    <Sponsors />
    <NavPreviousYears />
    <NavMain />
    <NavFull />
  </div>
);

export default PageIndex;
