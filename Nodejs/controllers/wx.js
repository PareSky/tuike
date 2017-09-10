module.exports = async (ctx)=>{
	let formData = ctx.query ;
	console.log('formData',JSON.stringify(formData));
	ctx.body = 'wx'
}