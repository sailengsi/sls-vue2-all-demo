import * as types from './mutations_types';

export default {
	update_userinfo: ({
		commit
	}, userinfo) => {
		return new Promise((resolve, reject) => {
			console.log('actions 接收userinfo start');
			console.log(userinfo);
			console.log('actions 接收userinfo end');
			commit(types.UPDATE_USERINFO, userinfo);
			resolve()
		});
	}
};