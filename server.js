// KB: 如果部署到Azure上去，请参考这个文章
// REF: http://geekswithblogs.net/shaunxu/archive/2012/09/18/node.js-adventure---when-node.js-meets-windows-azure.aspx

var http = require("http");

var server = http.createServer(webservice);
server.listen(8000);

function webservice(req, resp){
  resp.writehead(200, {"content-type": "text/html"});
  resp.end("hello world");
}



/*
process.env.VUE_ENV = 'server';
require('egg').startCluster({
  baseDir: __dirname,
  workers: process.env.WORKERS,
  port: process.env.PORT
});
*/