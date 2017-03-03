import Vue from 'vue';
import Router from 'vue-router';

import {
	Modules
} from '../components/';

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect() {
			return 'home';
		}
	}, {
		path: '/home',
		name: '首页',
		component: Modules.Home,
	}, {
		path: '/list',
		name: '列表',
		component: Modules.List
	}, {
		path: '/view',
		name: '详情',
		component: Modules.View
	}]
})