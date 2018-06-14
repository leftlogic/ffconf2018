module.exports = {
  themeColor: '#1800ff',
  version: require('../package.json').version,
  id: 'ffconf-2018',
  dates: ['2018-11-08', '2018-11-09'],
  startTime: '09:00',
  ticketPrice: '190',
  year: 2018,
  analytics: 'UA-1656750-55',
  ticketUrl:
    'https://www.tickettailor.com/checkout/view-event/id/102994/chk/31b0/',
  videos:
    'https://www.youtube.com/playlist?list=PLXmT1r4krsTo5KtThq4dATD_ctsV8mdJQ',
  sponsorUrl: 'https://media.ffconf.org/2017/sponsor-pack.pdf',
  sponsorAvailable: true,
  config: {
    phase: 3,
    soldout: {
      conference: true,
      day1: true,
      day2: true,
      workshops: true,
      'css-layout': true,
      'angular-2': true,
      next: true
    },
    mode: 'schedule',
    comments: {
      'mode-options': 'titles|speakers|schedule',
      'phase-options': {
        '0': 'before selling any ticket',
        '0.5': 'release of topics before selling tickets',
        '1': 'first batch of tickets',
        '2': 'second batch of tickets',
        '3': 'release of the full sessions',
        '4': 'after the conference'
      }
    }
  }
};
