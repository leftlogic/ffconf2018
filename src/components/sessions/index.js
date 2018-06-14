import Section from '../section';
import Break from './break';
import Talk from './talk';

import { formatSessions } from '../../utils';

import data from './data';
import api from './api';

const WhichSession = ({ isBreak, ...session }) => {
  const Which = isBreak ? Break : Talk;

  return <Which {...session} />;
};

const Sessions = () => {
  const sessions = formatSessions({ data, api });

  return (
    <Section id="sessions" title="Sessions">
      <ol className="sessions">
        {sessions.map((session, index) => (
          <WhichSession key={`session-${index}`} {...session} />
        ))}
      </ol>
    </Section>
  );
};

export default Sessions;
