module.exports = {
  themeColor: '#1e81a0',
  version: require('../package.json').version,
  id: 'ffconf-2018',
  dates: ['2018-11-08', '2018-11-09'],
  onSaleDate: '2018-07-10 10:00:00', // need the time as well
  startTime: '09:00',
  ticketPrice: '190',
  workshopPrice: '465',
  year: 2018,
  analytics: 'UA-1656750-55',
  ticketUrl: 'https://www.tickettailor.com/buy-tickets/177188/7469/modal/',
  videos:
    'https://www.youtube.com/playlist?list=PLXmT1r4krsTo5KtThq4dATD_ctsV8mdJQ',
  sponsorUrl: 'https://media.ffconf.org/2018/sponsor-pack.pdf',
  sponsorAvailable: false,
  config: {
    phase: 1,
    soldout: {
      conference: false,
      day1: true,
      day2: false,
      workshops: false,
      vue: false,
      next: false,
    },
    comments: {
      'phase-options': {
        '0': 'before selling any ticket',
        '0.5': 'release of topics before selling tickets',
        '1': 'first batch of tickets',
        '2': 'second batch of tickets',
        '3': 'release of the full sessions',
        '4': 'after the conference',
      },
    },
  },
};
