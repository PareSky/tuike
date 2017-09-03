var template = `<div class='diy'>
Rank
</div>`

const Rank = {
	template: template,
	data: function(){
		return {
            phone:'',
			authCode:''
		}
	},
    methods:{
        UploadImg: function(){
            this.authCode = '2333'
        },
        UploadQR: function(){
            router.push('/')
        },
        GenerateImg: function(){
            router.push('/')
        },
        Back: function(){
            router.go(-1)
        }
    }
}