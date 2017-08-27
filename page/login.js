var template = `<div class='login'>
<h1>ad spread system</h1>
<input v-model='phone' placeholder='phone'>
<br>
<input v-model='authCode' placeholder='authCode'>
<button @click='getAuthCode'>get code</button>

<br>
<button @click='login'>login</button>
</div>`

const Login = {
	template: template,
	data: function(){
		return {
            phone:'',
			authCode:''
		}
	},
    methods:{
        getAuthCode: function(){
            this.authCode = '2333'
        },
        login: function(){
            router.push('/')
        }
    }
}