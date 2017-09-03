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
            axios.get('/api')
            .then(res=>{
                console.log(res)
                this.authCode = res.data
            })
        },
        login: function(){
            router.push('/')
        }
    }
}