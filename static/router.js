const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/diy', component: DIY },
  { path: '/me', component: Me },
  { path: '/rank', component: Rank },
  { path: '/launch', component: Launch },
]

const router = new VueRouter({
	routes
})