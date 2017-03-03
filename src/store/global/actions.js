import * as types from './mutations_types';

export default {
	update_title: ({
		commit
	}, title) => {
		return new Promise((resolve, reject) => {
			console.log('actions 接收title:' + title);
			commit(types.UPDATE_TITLE, title);
			resolve()
		});
	}
};