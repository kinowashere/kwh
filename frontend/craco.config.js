const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/Style/Main.scss',
          './src/Component/**/*.scss',
          './src/Route/**/*.scss'
        ],
      },
    },
  ],
};
