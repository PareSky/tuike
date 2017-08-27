var template = `<div class='home'>
<input v-model='searchTitle' placeholder='search a title'>
<select  v-model =  "palce" >
	<option disabled selected value>select a place</option>
	<option  value = "shanghai" >shanghai</option >
	<option  value = "hangzhou" >hangzhou</option >
</select >
<section>
<image src='img/quest1.jpg' alt='quest1'></image>
</section>
</div>`

const Home = {
	template: template,
	data: function(){
		return {
            searchTitle:'',
			palce:''
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