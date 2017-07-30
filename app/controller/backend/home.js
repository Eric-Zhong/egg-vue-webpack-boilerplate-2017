exports.index = function* (ctx) {
  let model = {};
  // 构造View中的数据
  model.csrf = ctx.csrf;
  // KB, 使用Vue生成后台html内容
  yield ctx.render('backend/index.js', model);
};

exports.element = function* (ctx) {
  yield ctx.render('element/element.js', Model.getPage(1, 10));
};

exports.pager = function* (ctx) {
  const pageIndex = ctx.query.pageIndex;
  const pageSize = ctx.query.pageSize;
  ctx.body = Model.getPage(pageIndex, pageSize);
};


////////////////////////////////////////////////////////////////

// 加载Order数据
var getOrders = function(query){
  return new Promise(function(resolve, reject){
    var data = {};
    resolve(data);
  });
};
