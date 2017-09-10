/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const home = require('./home')
const wx = require('./wx')
const user = require('./user')

router.use('/api', home.routes(), home.allowedMethods())
router.use('/wx', wx.routes(), wx.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router