
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/element', app.controller.home.home.element);
  app.get('/pager', app.controller.home.home.pager);
  app.get('/about', app.controller.about.about.index);
  app.get('/router', app.controller.router.router.index);
  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);

  // KB: 这里注册了Router用于运行SPA页面
  app.get('/app(/.+)?', app.controller.app.app.index);
  app.get('/test', app.controller.test.test.index);

  // XZ: 在这里注册自己的Api路由信息
  // 使用RESTful方式定义Api
  // KB: 路由定义参考这里 https://eggjs.org/zh-cn/basics/router.html
  //app.resources("orders", "/api/v1/order", app.controller.order.order);
  app.post("orders", "/api/v1/order", app.controller.order.order.index);

  // 拆分路由文件的方法
  require("./router/order")(app);

};
