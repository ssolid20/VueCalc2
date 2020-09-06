<template>
  <div  v-bind:class="{main2: this.$store.state.count, main:!this.$store.state.count}">
    <top v-on:changeComponent="update($event)"></top>
    <transition name="component-fade" mode="out-in">

    <keep-alive>
      <component v-bind:is="toRender"></component>
    </keep-alive>
    </transition>

  </div>
</template>


<script>
import top from './views/top.vue'
import Home from './views/Home.vue'
import about from './views/NOTabout.vue'
import third from './views/3.vue'


export default {
  components: {
    'top':top,
    'about':about,
    'home':Home,
    'third':third
  },
  
  data() {
    return{
      toRender:"home",
      color:'.main'
    }
  },

  methods:{
    update: function(val){
      this.toRender=val
    }
  }
 
}
</script>
<style>

  .main{
    background: url('./assets/nums.png'); 
  }
  .main2{
    background: url('./assets/nums1.jpg'); 

  }
  @media screen and (max-width: 600px) {
    .main{
      background:white ;
    }
    .main2{
      background:white ;
    }
  }
</style>
