var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome', 'PhantomJS' ],
    files: [ './src/ahrefy.spec.js' ],
    frameworks: [ 'jasmine' ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      './src/ahrefy.spec.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module
    }
  });
};
