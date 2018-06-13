import Marked from '../marked';
import Section from '../section';

import data from 'raw-loader!./data.md';

const CodeOfConduct = () => {
  return (
    <Section id="code-of-conduct" title="Conference Code of Conduct">
      <Marked>{data}</Marked>
    </Section>
  );
};

export default CodeOfConduct;
