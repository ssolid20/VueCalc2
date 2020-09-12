<template>
  <div >
<!--href="javascript:void(0)" class="closebtn"-->
      <div id="mySidenav" v-bind:class="{sidenav: !this.$store.state.count, sidenav2:this.$store.state.count}">
        <div class='inside'>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}" v-on:click="third"> Plots</button>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}" v-on:click="home"> Calculator</button>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}" v-on:click="about"> About</button>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}"  v-on:click="changeColor"> 
            <span class="material-icons">{{this.$store.state.icon}}</span>
        </button>
        <button v-bind:class="{closebtn: !this.$store.state.count, closebtn2:this.$store.state.count}" v-on:click.prevent="closeNav">&times;</button>

      </div>
      </div>
       
        
      <div class="App">
            <nav>
                <div v-bind:class="{navUp: !this.$store.state.count, nav3:this.$store.state.count}">
                        <button id='menu'  v-on:click.prevent="openNav" v-bind:class="{nav1: !this.$store.state.count, nav2:this.$store.state.count}">
                            <span class="material-icons">menu</span>
                        </button>
                        <div class="test"> 
                        <button id='head' v-bind:class="{nav: !this.$store.state.count, nav2test:this.$store.state.count}">
                            {{this.comptowrite}}
                        </button>
                      </div>
                </div>
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
          percent:'50%',
          comptowrite:'Calculator',
          navAppear:false,
      }
  },
  mounted(){
    if(window.innerWidth <= 600){this.percent='50%'}
    else{
        this.percent='20%'
    }
  },
  methods:{
    openNav:function(){
        //if (this.navAppear===false) {
           // this.navAppear=true;
            document.getElementById("mySidenav").style.width = this.percent;
       // }
        //else {this.closeNav();this.navAppear=false}
    },
    closeNav:function(){
        document.getElementById("mySidenav").style.width = "0";
    },
    changeColor:function(){
        this.$store.commit('increment')
        this.closeNav()

    },
    home:function(){
        this.componentToRender ='home'
        this.$emit('changeComponent',this.componentToRender)
        this.comptowrite='Calculator'
        this.closeNav()

    },
    third:function(){
        this.componentToRender ='third'
        this.$emit('changeComponent',this.componentToRender)
        this.comptowrite='Plots'
        this.closeNav()

    },
    about:function(){
        this.componentToRender ='about'
        this.$emit('changeComponent',this.componentToRender)
        this.comptowrite='About'
        this.closeNav()


    },
  }
}
</script>
<style scoped>
.test{
    display: flex;	
    justify-content: center;
    flex-wrap: wrap;   
}
.nav{
      display: flex;
    justify-content: center;
    align-items: center; 
    margin-bottom: 0;
    list-style: none;
    /*border-radius: 4px;*/
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #adc1e2;
    color: aliceblue;
    background: #adc1e2;
    border: 2px solid #adc1e9;
}
.nav2test{
    display: flex;	
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    list-style: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #adc1e2;
    background: #272727;
    border: 2px solid #272727; 
}
.nav2{
   justify-content: left;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    float: left;
    margin-bottom: 0;
    list-style: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #adc1e2;
    background: #272727;
    border: 2px solid #272727;
}

.nav1{

    justify-content: left;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    float: left;
    margin-bottom: 0;
    list-style: none;
    /*border-radius: 4px;*/
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #adc1e2;
    color: aliceblue;
    background: #adc1e2;
    border: 2px solid #adc1e9;
}
.nav3{
    height: 5vh;
    width: 100%;
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
.navUp {
    height: 5.5vh;
    width: 100%;
    margin-bottom: 0;
    list-style: none;
    /*border-radius: 4px;*/
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #adc1e2;
    color: #adc1e2;
    background: #adc1e2;
    border: 2px solid #adc1e9;


}
.navHead2{
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
        padding-bottom: 5%;

}
.navHead{
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
    border: 2px solid #adc1e9;
    padding-bottom: 5%;

}
/*test*/
.inside{
    padding-left:15px;

}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #adc1e9;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

}
.sidenav2{
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #272727;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border-bottom: 1px solid #adc1e9;
  border-right: 1px solid #adc1e9;
  border-left: 1px solid #adc1e9;


}

.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: aliceblue;
  background: #adc1e2;
  background-color:#adc1e9; ;
  border: 2px solid #adc1e9
}
.closebtn2 {
  color: #adc1e2;
  background: #272727;
  border: 2px solid #272727;
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
@media screen and (max-width: 600px) {
  .sidenav  {padding-top: 90px;}
  .sidenav2 {padding-top: 90px;}
.nav2test{
    left: 32%;
transform: translate(-32%, 0); 
}
.nav2{
  justify-content: center;
  position:inherit
}
.nav3{
  height: 5.5vh;
}
.nav2test{
      padding-left: 15px;

}
}
</style>
