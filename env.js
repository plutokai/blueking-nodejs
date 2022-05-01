const config = {
  production: {
    NODE_ENV: JSON.stringify('production'),
    AJAX_URL_PREFIX: JSON.stringify(''),
    USER_INFO_URL: JSON.stringify('/api/user'),
    assetsPublicPath: '{{BK_STATIC_URL}}',
  },
  development: {
    NODE_ENV: JSON.stringify('development'),
    AJAX_URL_PREFIX: JSON.stringify('api/'),
    USER_INFO_URL: JSON.stringify('/user'),
    assetsPublicPath: '/',
    HOST: '',
    BKPAAS_APP_ID: JSON.stringify(''),
    BK_LOGIN_URL: JSON.stringify(''),
  },
  stag: {
    NODE_ENV: JSON.stringify('production'),
    AJAX_URL_PREFIX: JSON.stringify(''),
    USER_INFO_URL: JSON.stringify('/api/user'),
    assetsPublicPath: '{{BK_STATIC_URL}}',
  },
};

module.exports = () => {
  if (process.env.BK_NODE_ENV === 'development') {
    return config.development;
  }

  const BUILD_ENV = process.env.BKPAAS_ENVIRONMENT || process.env.BK_NODE_ENV;

  if (BUILD_ENV === 'stag') {
    return config.stag;
  }
  return config.production;
};

