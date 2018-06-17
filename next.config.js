const withSass = require('@zeit/next-sass');

module.exports = withSass({
  sassLoaderOptions: {
    outputStyle: 'expanded'
  },
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/scholarship': { page: '/scholarship' },
      '/code-of-conduct': { page: '/code-of-conduct' },
      '/workshop/angular': { page: '/workshop', query: { slug: 'angular' } },
      '/workshop/next': { page: '/workshop', query: { slug: 'next' } }
    };
  }
});
