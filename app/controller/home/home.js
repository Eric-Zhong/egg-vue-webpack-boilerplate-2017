const Model = require('../../mocks/article/list');

exports.index = function* (ctx) {
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
  yield ctx.render('index/index.js', model);
};

exports.element = function* (ctx) {
  yield ctx.render('element/element.js', Model.getPage(1, 10));
};

exports.pager = function* (ctx) {
  const pageIndex = ctx.query.pageIndex;
  const pageSize = ctx.query.pageSize;
  ctx.body = Model.getPage(pageIndex, pageSize);
};
