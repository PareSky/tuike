const userInfoService = require('../services/user-info')

module.exports = {

	async login(ctx){
		let formData = ctx.query ;
		console.log('formData',JSON.stringify(formData));
		ctx.body = 'success'
	},

	async signUp(ctx){
		let result = {
			success: false,
			message: '',
			data: null
		}
		let formData = ctx.request.body

		let userState = await userInfoService.getExistOne({
			phone: formData.phone
		})

		if(userState){
			if(userState.phone === formData.phone){
				result.message = 'already exist'
				ctx.body = result
				return
			}
		}

		let userResult = await userInfoService.create({
			name: formData.name,
			phone: formData.phone,
			openid: formData.openid,
			password:formData.password
		})
		console.log('userResult',userResult)
		if(userResult.insertId>0){
			result.success = true
		}else{
			result.message = 'sys err'
		}

		ctx.body = result
	}
}