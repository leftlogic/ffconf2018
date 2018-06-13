import Marked from '../marked';
import Section from '../section';

import data from 'raw-loader!./data.md';

const Thanks = () => {
  return (
    <Section id="thanks" title="A Special Thanks">
      <Marked>{data}</Marked>
    </Section>
  );
};

export default Thanks;
