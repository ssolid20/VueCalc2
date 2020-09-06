<template>
  <div >
      <div class="App">
            <nav>
                <ul  v-bind:class="{nav: !this.$store.state.count, nav3:this.$store.state.count}">
                    <li  id='about'>
                        <button v-bind:class="{nav: !this.$store.state.count, nav2:this.$store.state.count}" v-on:click="third"> Plots</button>
                    </li>
                    <li  id='about'>
                        <button v-bind:class="{nav: !this.$store.state.count, nav2:this.$store.state.count}" v-on:click="home"> Advanced Calculator</button>
                    </li>
                    <li id='about'>
                        <button v-bind:class="{nav: !this.$store.state.count, nav2:this.$store.state.count}" v-on:click="about"> About</button>
                    </li>
                    <li  id='special'>
                        <button v-bind:class="{nav: !this.$store.state.count, nav2:this.$store.state.count}"  v-on:click="changeColor"> 
                            <span class="material-icons">
                            {{this.$store.state.icon}}
                    
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

  </div>
</template>


<script>
export default {
  components: {
    
  },
  data() {
      return{
          componentToRender:'home',
      }
  },
  methods:{
    changeColor:function(){
        this.$store.commit('increment')
    },
    home:function(){
        this.componentToRender ='home'
        this.$emit('changeComponent',this.componentToRender)
    },
    third:function(){
        this.componentToRender ='third'
        this.$emit('changeComponent',this.componentToRender)

    },
    about:function(){
        this.componentToRender ='about'
        this.$emit('changeComponent',this.componentToRender)

    },
  }
}
</script>
<style scoped>


.nav2{
    justify-content: center!important;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #adc1e2;
    background: #272727;
    border: 2px solid #272727;
}
.nav3{
    justify-content: center!important;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    /*border-radius: 4px;*/
    font-size: 16px;
    line-height: 24px;
    color: aliceblue;
    background: #272727;
    border-bottom: 2px solid #adc1e9;
    border-left:2px solid #adc1e9 ;
    border-right:2px solid #adc1e9 ;

}
.nav {
    justify-content: center!important;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    
    /*border-radius: 4px;*/
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #adc1e2;
    color: aliceblue;
    background: #adc1e2;
    border: 2px solid #adc1e9

}

</style>
