// 使用了RESTful的方式定义了Orders的Api接口
// KB: 路由定义参考这里 https://eggjs.org/zh-cn/basics/router.html
exports.index = function* (ctx) {
    // yield ctx.render("index");
    let form = JSON.stringify(ctx.request.body);
    console.log(form);
    ctx.body = form;
};
exports.new = function* (ctx) {
    yield ctx.render("new");
};
exports.create = function* () {};
exports.show = function* () {};
exports.edit = function* () {};
exports.update = function* () {};
exports.destroy = function* () {};



exports.index2 = function* (ctx) {
  let model = {};
  let token = ctx.csrf;
  console.log(ctx.cookies);
  token = ctx.cookies.get("csrfToken");
  tokenB = ctx.csrf;
  console.log("读取 Cookie 中 csrfToken 值：" + token)
  console.log("读取 ctx.csrf 值：" + tokenB);
  // 构造View中的数据
  model.csrf = ctx.csrf;
  // KB, 使用Vue生成后台html内容
  ctx.body = "hello";
};
