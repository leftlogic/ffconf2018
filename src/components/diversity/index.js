import Markdown from '../markdown';
import Section from '../section';

import data from 'raw-loader!./data.md';

const Diversity = () => {
  return (
    <Section id="diversity" title="Diversity">
      <Markdown>{data}</Markdown>
    </Section>
  );
};

export default Diversity;
