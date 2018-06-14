import Markdown from '../markdown';
import Section from '../section';

import data from 'raw-loader!./data.md';

const Thanks = () => {
  return (
    <Section id="thanks" title="A Special Thanks">
      <Markdown>{data}</Markdown>
    </Section>
  );
};

export default Thanks;
