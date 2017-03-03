<template>
	<div>
		<header>
			<span v-html='$store.state.global.title'></span>
			<span @click='logout' v-if='$store.state.user.userinfo.username' class='logout'>退出</span>
			<span v-html='$store.state.user.userinfo.username || "登录"' class='userinfo'></span>
		</header>
	</div>
</template>
<script>
	module.exports=require('./HeadNav.js');
</script>
<style scoped>
	header{
		display: inline-block;
		width:100%;
		height: 50px;
		border-bottom: 1px solid red;
		line-height: 50px;
		text-align: center;
	}

	.userinfo,
	.logout{
		float: right;
	}
	.logout{
		margin-left: 20px;
	}
</style>