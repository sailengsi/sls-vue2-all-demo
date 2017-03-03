import Vue from 'vue';
import App from './App';

import request from './config/request.js';
import router from './config/router.js';

//vuex store
import store from './store/';

Vue.config.productionTip = false;



new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})