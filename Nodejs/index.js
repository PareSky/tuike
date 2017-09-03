const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')

const config = require('./config')
const routers = require('./routers/index')

const app = new Koa()

// 配置ctx.body解析中间件
app.use(bodyParser())

//配置静态资源加载中间件
 app.use(koaStatic(
 	path.join(__dirname, './../static')
))

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port)
console.log(`the server is started at port ${config.port}`)
