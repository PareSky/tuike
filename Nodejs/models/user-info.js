const dbUtils = require('./../utils/db-util')

const user = {
	async create(model){
		let result = await dbUtils.insertData('user', model)
		return result
	},

	async getExistOne(data){
		let _sql = `
		SELECT * FROM user 
		where phone = "${data.phone}"`
		let result = await dbUtils.query(_sql)
		//console.log('getOne',result)
		if (Array.isArray(result) && result.length >0) {
			result = result[0]
		} else {
			result = null
		}
		return result
	}
}

module.exports = user