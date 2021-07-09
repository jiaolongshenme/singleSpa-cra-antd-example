
module.exports = {
  webpack: function(config, env) {
    config.output.jsonpFunction = 'mainmain';
    return config;
  }
}
