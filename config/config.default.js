const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    // KB: 表态文件的缓存时长
    // maxAge: 31536000,
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];


  // KB: 配置CSRF
  // https://www.npmjs.com/package/egg-security 
  exports.security = {
    csrf: {
      useSession: false,          // if useSession set to true, the secret will keep in session instead of cookie 
      ignoreJSON: false,          // skip check JSON requests if ignoreJSON set to true 
      cookieName: 'csrfToken',    // csrf token's cookie name 
      sessionName: 'csrfToken',   // csrf token's session name 
      headerName: 'x-csrf-token', // request csrf token's name in header 
      bodyName: '_csrf',          // request csrf token's name in body 
      queryName: '_csrf',         // request csrf token's name in query 
    },
  };

  return exports;
};
