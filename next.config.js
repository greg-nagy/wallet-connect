const RemoveStrictPlugin = require("remove-strict-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  webpack5: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new RemoveStrictPlugin());

    // Important: return the modified config
    return config;
  },
};
