// KB: 引用了一个Model，里面定义了article的数据获取方法
const Model = require('../../mocks/article/list');

exports.index = function* (ctx) {
  // KB: Rend页面，根目录是 /web/page 下找
  // /web/page/app/app.js
  yield ctx.render('app/app.js', { url: this.url.replace(/\/app/, '') });
};

exports.list = function* (ctx) {
  const pageIndex = ctx.query.pageIndex;
  const pageSize = ctx.query.pageSize;
  ctx.body = Model.getPage(pageIndex, pageSize);
};

exports.detail = function* (ctx) {
  const id = ctx.query.id;
  ctx.body = Model.getDetail(id);
};
