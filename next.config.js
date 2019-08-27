const path = require('path');
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js']
    };

    config.node = {
      fs: 'empty'
    };
    // Load Ant Styles
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader'
      });
    }
    return config;
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/2048' : ''
});
