import moment from 'moment';

import config from '../config';

const idify = (s = '') => {
  return s
    .replace(/&.*?;/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .toLowerCase();
};

const formatTalksById = api => {
  const [first] = api;
  const { order } = first;
  const isItOrdered = order !== 0 ? true : false;

  return api.reduce((acc, talk, index) => {
    const { order } = talk;
    const key = isItOrdered ? order : index + 1;
    acc[key] = { ...talk };

    return acc;
  }, {});
};

const formatSessions = ({ data, api }) => {
  const [date1, date2] = config.dates;
  const startTime = moment(`${date1} ${config.startTime}`);

  if (api.length < 8) {
    // push in the missing talks and randomise
    api.push(Array.from({ length: 8 - api.length }).map(() => ({})));
    // api.forEach((_, i) => (_.order = _.order || i + 1));
    api.sort(() => Math.random() < 0.5);

    if (!api[0].title) {
      api.push(api.pop());
    }
  }

  const talksById = formatTalksById(api);

  const properData = data.map(session => {
    const { id, duration, isBreak, title, slug = idify(title) } = session;

    const start = startTime.format('HH:mm');
    startTime.add(duration, 'minutes');
    const end = startTime.format('HH:mm');

    const newSession = {
      ...session,
      start,
      end,
      date1: `${date1}T${start}Z`,
      date2: `${date2}T${start}Z`,
      talk: id ? { ...talksById[id] } : undefined,
      slug: isBreak ? slug : undefined,
    };

    return newSession;
  });

  return properData;
};

export { idify, formatSessions };
