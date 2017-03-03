<template>
	<div>
		<footer>
			<a href="#home">
				<div class="nav">首页</div>
			</a>
			<a href="#list">
				<div class="nav">列表</div>
			</a>
			<a href="#view">
				<div class="nav">详情</div>
			</a>
		</footer>
	</div>
</template>
<script>
	module.exports=require('./FootNav.js');
</script>
<style scoped>
	footer{
		display: inline-block;
		width:100%;
		height: 50px;
		position: fixed;
		bottom:0px;
		left:0px;
		border-top: 1px solid red;
	}

	.nav{
		display: inline-block;
		float: left;
		width:33%;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
	}
</style>