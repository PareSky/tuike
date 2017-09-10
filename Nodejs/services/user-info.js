const userModel = require('../models/user-info')


const user = {
	async create(user){
		let result = await userModel.create(user)
		return result
	},

	async getExistOne(data){
		let result = await userModel.getExistOne(data)
		return result
	}
}

module.exports = user