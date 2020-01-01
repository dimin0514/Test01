import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/board/Profile.vue'
import PostCard from '@/components/board/PostCard.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{path: '/profile', name: 'profile', component: Profile},
		{path: '/postCard', name: 'postCard', component: PostCard}
	]
})