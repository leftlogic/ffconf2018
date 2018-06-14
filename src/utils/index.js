import moment from 'moment';

import config from '../config';

const idify = s => {
  return s
    .replace(/&.*?;/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .toLowerCase();
};

const formatSessions = ({ data, api }) => {
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

export { idify, formatSessions };
