'use strict';

module.exports = appInfo => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567150761158_5243';

  // add your middleware config here
  config.middleware = [ 'router' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    multipart: {
      mode: 'file',
    },
  };

  config.mysql = {
    client: {
      host: '169.254.166.111',
      port: 3306,
      user: 'root',
      password: '123321',
      database: 'school',
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
