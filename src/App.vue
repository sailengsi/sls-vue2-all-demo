<template>
    <div id="app">
        <component :is='currentView' keep-alive></component>
        <div id="content">
            <router-view></router-view>
        </div>    
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import {HeadNav,FootNav,HeadNav2} from '@/components/Common/';
    export default {
        name: 'app',
        components:{
            HeadNav,
            FootNav,
            HeadNav2
        },
        data(){
            return {
                currentView:'HeadNav'
            }
        },
        watch:{
            $route(to,from){
                console.log(to.path);
                switch(to.path){
                    case '/view':
                        this.currentView='HeadNav2';
                    break;
                    default:
                    this.currentView='HeadNav';
                }
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
