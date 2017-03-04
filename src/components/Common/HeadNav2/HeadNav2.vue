<template>
	<div>
		<header>
			<span>第二个头部</span>
		</header>
	</div>
</template>
<script>
	module.exports=require('./HeadNav2.js');
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