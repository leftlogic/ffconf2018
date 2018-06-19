const withSass = require('@zeit/next-sass');

const workshops = require('./src/components/workshops/data');

const routes = {
  '/': { page: '/' },
  '/scholarship': { page: '/scholarship' },
  '/terms': { page: '/terms' },
  '/code-of-conduct': { page: '/code-of-conduct' }
};

workshops.forEach(workshop => {
  const { slug } = workshop;

  routes[`/workshop/${slug}`] = {
    page: '/workshop',
    query: { slug }
  };
});

module.exports = withSass({
  sassLoaderOptions: {
    outputStyle: 'expanded'
  },
  exportPathMap: async () => {
    return routes;
  }
});
