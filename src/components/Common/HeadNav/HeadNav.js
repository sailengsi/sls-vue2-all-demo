module.exports = {
	name: 'head-nav',
	data() {
		return {};
	},
	methods: {
		logout() {
			this.$store.dispatch('update_userinfo', {});
		}
	}
};