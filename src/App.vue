<template>
    <div id="app">
        <head-nav></head-nav>
        <div id="content">
            <router-view></router-view>
        </div>    
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import {HeadNav,FootNav} from '@/components/Common/';
    export default {
        name: 'app',
        components:{
            HeadNav,
            FootNav
        },
        watch:{
            $route(to,from){
                // console.log(to.name);
                this.$store.dispatch('update_title',to.name);
            }
        }
    }
</script>
<style scoped>
    #content{
        padding: 20px;
        
    }
</style>
