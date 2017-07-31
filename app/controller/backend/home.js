exports.index = function* (ctx) {
  let model = {};
  // 构造View中的数据
  model.csrf = ctx.csrf;


  // 从table store中获取全部数据
  // var result = yield getOrders('');
  var result = yield getOrdersByBatch('');

  model.orders = result;

  console.log('** Got orders from table store api.')

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
var getOrdersByBatch = function (query) {
  return new Promise(function (resolve, reject) {
    var TableStore = require('tablestore');

    var client = new TableStore.Client({
      accessKeyId: 'LTAIPHidSaKTwMox',
      secretAccessKey: 'WuziCVm8Gke2SHJImyhV088H1FxKCh',
      endpoint: 'http://ts-iphone-mall.cn-hangzhou.ots.aliyuncs.com',
      instancename: 'ts-iphone-mall',
      maxRetries: 1 //默认20次重试，可以省略这个参数
    });

    var params = {
      tables: [{
        tableName: 'tb_visit_log'
      }]
    };

    client.batchGetRow(params, function (err, data) {
      var result = {
        success: true,
        message: '',
        error: '',
        data: {}
      };
      if (err) {

        console.log('error:', err);
        result.success = false;
        result.error = err;

      }
      else {

        console.log('** Load orders from table store.');
        var tableCount = data.tables.length;
        var rowCount = data.tables[0].length;

        var currentTable = data.tables[0];
        

        console.log('table count: ' + tableCount.toString());
        console.log('row count: ' + rowCount.toString());
        // consoel.log(data);
        result.data = data;

      }
      resolve(result);
    });

  });
  
};




// 加载Order数据
var getOrders = function (query) {
  return new Promise(function (resolve, reject) {
    var TableStore = require('tablestore');

    var client = new TableStore.Client({
      accessKeyId: 'LTAIPHidSaKTwMox',
      secretAccessKey: 'WuziCVm8Gke2SHJImyhV088H1FxKCh',
      endpoint: 'http://ts-iphone-mall.cn-hangzhou.ots.aliyuncs.com',
      instancename: 'ts-iphone-mall',
      maxRetries: 1 //默认20次重试，可以省略这个参数
    });

    var params = {
      tableName: 'tb_order',
      direction: TableStore.Direction.FORWARD,
      inclusiveStartPrimaryKey: [
        {create_date: TableStore.INF_MIN},
        {create_time: TableStore.INF_MIN},
        {mobile: TableStore.INF_MIN}
      ],
      // exclusiveEndPrimaryKey: [],
      max_versions: 1,
      limit: 50
    };

    console.log(params)
    console.log('Begin to get range from table store.')

    client.getRange(params, function (err, data) {
      console.log('Get data.');
      var result = {
        success: true,
        message: '',
        error: '',
        data: {}
      };
      if (err) {
        console.log('Get order from table store throw error.')
        console.log('error:', err);
        result.success = false;
        result.error = err;
      }
      else {
        console.log('** Load orders from table store.');
        // consoel.log(data);
        result.data = data;
      }
      resolve(result);
    });

  });
  
};
