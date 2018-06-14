import moment from 'moment';

import Section from '../section';
import Break from './break';
import Talk from './talk';

import config from '../../config';
import data from './data';
import api from './api';

const idify = s => {
  return s
    .replace(/&.*?;/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .toLowerCase();
};

const formatData = ({ data, api }) => {
  const [date1, date2] = config.dates;
  const startTime = moment(`${date1} ${config.startTime}`);

  const talksById = api.reduce((acc, talk) => {
    const { order } = talk;
    acc[order] = { ...talk };

    return acc;
  }, {});

  const properData = data.map(session => {
    const { id, duration, isBreak, title } = session;

    const start = startTime.format('HH:mm');
    startTime.add(duration, 'minutes');
    const end = startTime.format('HH:mm');

    const newSession = {
      ...session,
      start,
      end,
      date1: `${date1} ${start}`,
      date2: `${date2} ${start}`,
      talk: id ? { ...talksById[id] } : undefined,
      slug: isBreak ? idify(title) : undefined
    };

    return newSession;
  });

  return properData;
};

const WhichSession = ({ isBreak, ...session }) => {
  const Which = isBreak ? Break : Talk;

  return <Which {...session} />;
};

const Sessions = () => {
  const sessions = formatData({ data, api });

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
