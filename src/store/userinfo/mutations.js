import * as types from './mutations_types';

export default {
	[types.UPDATE_USERINFO](state, userinfo) {
		console.log('mutations 接收userinfo start');
		console.log(userinfo);
		console.log('mutations 接收userinfo end');
		console.log(userinfo);
		state.userinfo = userinfo;
	}
};