const path = require('path');
module.exports = app => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  exports.vuessr = {
    injectCss: false
  };

  exports.webpack = {
    webpackConfigList: [
      require(path.join(app.baseDir, 'build/client')),
      require(path.join(app.baseDir, 'build/server'))
    ]
  };


  // XUZHONG: 这里还没学会怎么被其他组件使用
  // Aiyun云的相关配置
  // 在此应用中，配置了RAM
  // xuzhong, eric.xu
  // RAM用户登录链接 http://signin.aliyun.com/1190204613994277/login.htm
  exports.aliyun = {
    tableStore: {
      accessKeyId: 'LTAIPHidSaKTwMox',
      secretAccessKey: 'WuziCVm8Gke2SHJImyhV088H1FxKCh',
      endpoint: 'http://ts-iphone-mall.cn-hangzhou.ots.aliyuncs.com',
      instancename: 'ts-iphone-mall',
      maxRetries: 20 //默认20次重试，可以省略这个参数
    }
  };

  return exports;
};
