export default {

	//全局设置
	gbs: {
		host: '/rootApi', //接口根地址。本地代理到slsadmin.api.sls.com,线上使用的是Nginx代理
		db_prefix: 'yourkey_', //本地存储的key

		api_key: 'status',
		api_value: 200
	},

	//回调
	cbs: {
		/**
		 * ajax请求成功，返回的状态码不是200时调用
		 * @param  {object} err 返回的对象，包含错误码和错误信息
		 */
		statusError(err) {
			alert(JSON.stringify(err));
		},

		/**
		 * ajax请求网络出错时调用
		 */
		requestError(err) {
			alert('请求错误');
		}
	}
};