const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ['172.16.30.105', 'admin-panel.egov.uz'],
  },
};
