<template>
	<div>
		<input type="text" v-model='data.username'>
		<input type="password" v-model='data.password'>
		<button @click='login'>登录</button>
	</div>
</template>
<script>
	module.exports=require('./Home.js');
</script>