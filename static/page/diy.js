var template = `<div class='diy'>
<img src='./img/diy.jpg' width="100%">
	<a @click="UploadImg">Upload Img</a>
	<a @click="UploadQR">Upload QRcode</a>
	<a @click="GenerateImg">Generate Img</a>
	<a @click="Back">Back</a>
</div>`

const DIY = {
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