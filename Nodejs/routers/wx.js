const router = require('koa-router')()
const wx = require('../controllers/wx')

module.exports = router.get('/',wx)