const Model = require('../../mocks/article/list');

exports.index = function* (ctx) {
  let model = {};
  let token = ctx.csrf;
  token = ctx.cookies.get("csrfToken");
  tokenB = ctx.csrf;
//   console.log("读取 Cookie 中 csrfToken 值：" + token)
//   console.log("读取 ctx.csrf 值：" + tokenB);
  // 构造View中的数据
  model.csrf = ctx.csrf;
  // KB, 使用Vue生成后台html内容
  yield writeVisitLog();
  // ctx.body = 'hello world';
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



var writeVisitLog = function () {
    return new Promise(function (resolve, reject) {
        var response = {}; // 返回值定义
        // 异步处理方法
        // 因为要将数据写入Aliyun的TableStore，在这里引用这Nodejs的SDK
        // 在这里增加Create订单的操作
        var TableStore = require('tablestore');

        var client = new TableStore.Client({
            accessKeyId: 'LTAIPHidSaKTwMox',
            secretAccessKey: 'WuziCVm8Gke2SHJImyhV088H1FxKCh',
            endpoint: 'http://ts-iphone-mall.cn-hangzhou.ots.aliyuncs.com',
            instancename: 'ts-iphone-mall',
            maxRetries: 20 //默认20次重试，可以省略这个参数
        });

        // 计算 yyyy-mm-dd, hh:mm:ss
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();

        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var current_date = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        var current_time = date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
        var current_datetime = current_date + ' ' + current_time;

        // 构造订单数据结构
        var params = {
            tableName: "tb_visit_log",
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey: [
                { 'id': Date.parse(new Date()).toString() }
            ],
            attributeColumns: [
                { 'page': '/' },
                { 'remote_ip': '' },
                {'date': current_date},
                {'time': current_time} 
            ],
            returnContent: { returnType: TableStore.ReturnType.Primarykey }
        };

        // 向 table store 中写入数据
        client.putRow(params, function (err, data) {
            if (err) {
                console.log('error:', err);
                response = {
                    'success': false,
                    'message': 'failture',
                    'error': err
                };
            }
            else {
                response = {
                    'success': true,
                    'message': 'success'
                };
            }
            console.log('** Wite visit log is OK.')
            resolve(response);
        });

    });
};