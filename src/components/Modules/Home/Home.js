module.exports = {
	name: 'home',
	data() {
		return {
			data: {
				username: 'sls-1',
				password: '123456'
			}
		};
	},
	methods: {
		login() {
			this.$$login(this.data, data => {
				// console.log(data);
				this.$store.dispatch('update_userinfo', data.userinfo);
				// console.log(this.$store.state.user.userinfo);
			});
		}
	},
	mounted() {

	}
};