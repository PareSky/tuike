/**
 * restful 用户模块路由
 */

 const router = require('koa-router')()
 const userInfoController = require('./../controllers/userInfoController')

 const routers = router
 	.get('/login', userInfoController.login)
 	.post('/signUp',userInfoController.signUp)

 module.exports = routers