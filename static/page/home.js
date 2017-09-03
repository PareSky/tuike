var template = `<div class='home'>
<input v-model='searchTitle' placeholder='search a title'>
<select  v-model =  "palce" >
	<option disabled selected value>select a place</option>
	<option  value = "shanghai" >shanghai</option >
	<option  value = "hangzhou" >hangzhou</option >
</select >
<section>
	<div class='qCard' @click="toLaunch">
		<img src='img/quest1.jpg'></img>
		<div>title: girl1</div>
	</div>
	<div class='qCard'>
		<img src='img/q2.jpg'></img>
		<div>title: girl2</div>
	</div>
</section>
<nav>
	<a @click="toHome">Home</a>
	<a @click="toDIY">DIY</a>
	<a @click="toRank">Rank</a>
	<a @click="toMe">Me</a>
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
    toLaunch: function(){
        router.push('/launch')
    },
    toHome: function(){
        router.push('/')
    },
    toDIY: function(){
        router.push('/diy')
    },
    toRank: function(){
        router.push('/rank')
    },
    toMe: function(){
        router.push('/me')
    },

  }
}