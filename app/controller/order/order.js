// 因为要将数据写入Aliyun的TableStore，在这里引用这Nodejs的SDK


// 使用了RESTful的方式定义了Orders的Api接口
// KB: 路由定义参考这里 https://eggjs.org/zh-cn/basics/router.html
exports.index = function* (ctx) {
    var response = {
        success: true,
        message: '处理成功'
    };
    // yield ctx.render("index");

    // 将Ajax转入的form数据，转成string，用于输出显示
    let form = JSON.stringify(ctx.request.body); // 将JSON obj转string
    let data = ctx.request.body;

    console.log(form);

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
        tableName: "tb_order",
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey: [
            { 'create_date': current_date },
            { 'create_time': current_time },
            { 'mobile': data.telephone.toString() }
        ],
        attributeColumns: [
            { 'product': data.product },
            { 'color': data.color },
            { 'amount': data.amount },
            { 'name': data.name },
            { 'area': data.area },
            { 'city': data.city },
            { 'depart': data.depart },
            { 'address': data.address },
            { 'price': data.price },
            { 'comment': data.comment },
            { 'createtime': current_datetime },
            {'version': ''}
        ],
        returnContent: { returnType: TableStore.ReturnType.Primarykey }
    };

    // console.log('--------------------------------');
    // console.log(params);
    // console.log('--------------------------------');

    // 向 table store 中写入数据
    client.putRow(params, function (err, data) {
        if (err) {
            console.log('error:', err);
            response = {
                'success': false,
                'message': '创建订单失败，请稍后再提交一次，谢谢！',
                'error': err
            };
        }
        else{
            response = {
                'success': true,
                'message': '创建订单成功，稍后会有服务专员与你联系。',
                'data': data
            };
        }

    });
    
    ctx.body = response;

};

exports.new = function* (ctx) {
    yield ctx.render("new");
};

exports.create = function* () { };
exports.show = function* () { };
exports.edit = function* () { };
exports.update = function* () { };
exports.destroy = function* () { };

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
