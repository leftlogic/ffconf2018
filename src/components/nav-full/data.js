import config from '../../config';

const { sponsorUrl } = config;

export default [
  { title: 'sessions', url: '/sessions' },
  { title: 'workshops', url: '/workshops' },
  { title: 'locations', url: '/locations' },
  { title: 'scholarships', url: '/scholarship' },
  {
    title: 'sponsorship',
    url: sponsorUrl
  },
  { title: 'diversity initiative', url: '/diversity' },
  { title: 'code of conduct', url: '/code-of-conduct' },
  { title: 'terms', url: '/terms' }
];
