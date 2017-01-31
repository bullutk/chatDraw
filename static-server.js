var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8081, ()=>{
 console.log("static server is running on 8081");
})