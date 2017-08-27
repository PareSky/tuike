var template = `<div class='home'>
<input v-model='searchTitle' placeholder='search a title'>
<select  v-model =  "palce" >
	<option disabled selected value>select a place</option>
	<option  value = "shanghai" >shanghai</option >
	<option  value = "hangzhou" >hangzhou</option >
</select >
<section>
	<div class='qCard'>
		<img src='img/quest1.jpg'></img>
		<div>title: girl1</div>
	</div>
	<div class='qCard'>
		<img src='img/q2.jpg'></img>
		<div>title: girl2</div>
	</div>
</section>
<nav>
	<a href="index.asp">Home</a>
	<a href="html5_meter.asp">Previous</a>
	<a href="html5_noscript.asp">Next</a>
</nav>
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