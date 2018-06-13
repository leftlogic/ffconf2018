import NavFull from '../src/components/nav-full';
import NavMain from '../src/components/nav-main';
import PreviousYears from '../src/components/previous-years';
import Sponsors from '../src/components/sponsors';
import Locations from '../src/components/locations';
import Thanks from '../src/components/thanks';
import CodeOfConduct from '../src/components/code-of-conduct';

const PageIndex = () => (
  <div id="root">
    <CodeOfConduct />
    <Thanks />
    <Locations />
    <Sponsors />
    <PreviousYears />
    <NavMain />
    <NavFull />
  </div>
);

export default PageIndex;