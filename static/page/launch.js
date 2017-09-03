var template = `<div class='diy'>
<img src='img/launch-back.png' width="100%">
	<a @click="launch">Launch</a>
	<a @click="back">Back</a>
</div>`

const Launch = {
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
        launch: function(){
            router.push('/')
        },
        GenerateImg: function(){
            router.push('/')
        },
        back: function(){
            router.go(-1)
        }
    }
}