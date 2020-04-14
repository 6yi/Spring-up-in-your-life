import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import blog from '../components/blog.vue'
import type from '../components/type.vue'
import allblog from '../components/allblog.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component: allblog
    },
		{
		  path: '/blog/:id',
		  name: 'blog',
		  component: blog
		},
		{
			path:'/type',
			name:'type',
			component:type
		},
		{
			path:'/allblog',
			name:'allblog',
			component:allblog
		}
  ]
})
