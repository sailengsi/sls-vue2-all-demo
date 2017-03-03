import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, Axios);

import setting from './setting.js';


//设置接口域名根地址
Vue.axios.defaults.baseURL = setting.gbs.host;


/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {Function} errFn     错误回调函数
 */
var ajax = function(type, url, data, fn, errFn) {
	if (type === 'get') {
		var datas = {
			params: data
		};
	} else {
		var datas = data;
	}

	Vue.axios[type](url, datas).then((res) => {
		if (res.data[setting.gbs.api_key] === setting.gbs.api_value) {
			fn(res.data.data);
		} else {
			if (errFn) {
				errFn.call(this, res.data);
			} else {
				setting.cbs.statusError.call(this, res.data);
			}
		}
	}).catch((err) => {
		if (errFn) {
			errFn.call(this, err);
		} else {
			setting.cbs.requestError.call(this, err);
		}
	});
};


var apis = {
	user: {
		login(data, fn, errFn) {
			ajax.call(this, 'post', 'Login/login', data, fn, errFn);
		}
	}
};


Vue.use({
	install(Vue, options) {
		for (let m in apis) {
			if (typeof apis[m] === 'object') {
				for (let f in apis[m]) {
					Vue.prototype['$$' + f] = apis[m][f];
				}
			}
		}
	}
});