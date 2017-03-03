import * as types from './mutations_types';

export default {
	[types.UPDATE_TITLE](state, title) {
		console.log('mutations 接收title:' + title);
		state.title = title;
	}
};