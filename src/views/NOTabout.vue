<template>
  <div class='container'>
       
      <div v-bind:class="{first: !this.$store.state.count, second:this.$store.state.count}" >
        <h2 v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">About</h2>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">This app 'Advanced Calculator' permits you to execute not only simple calculations but also 
          solve integrals, equations, inequalities, find derivatives and limits , and plot graphs.
        </p>

        <h4 v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">Guide</h4>

        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">
          If you want to use in your calculations result or expression of your previous calculations
          just tap or click on it and it will appear in input field
        </p>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">
          If you want to calculate 'sin' ,'cos' ,'tan' in radians just remove word 'deg'.
        </p>
        <strong v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">P.S you can use 'acos' ,'asin' ,'atan' only with degrees</strong>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">If you want find derivative just write function and press 'dy/dx' button</p>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">If you want to solve inequalitie just write it and press 'Solve' button </p>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">If you want to solve equation just write it and press 'Solve' button </p>
        <strong v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">Note: write your equation in the way that it equals to 0 or you will get an error </strong>
        <strong v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">Note: solving equations or inequalities may take some time </strong>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">If you want to solve integral write your function after '∫' sign. In case of indefinite integral
          leave '[ ]' brackets empty , but in case of definite integral replace 'lb' sign with number that you
          want to use as lower bound and replace 'ub' sign with number that you want to use as upper bound
        </p>
        <strong v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">Note: solving integrals may take some time </strong>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">
          If you want to find some limit just write in '[ ]' brackets ,at first function and after ',' sign,
          replace '->x' sign with number to which function aims
        </p> 
        <strong v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">Note: finding limits may take some time </strong>

        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">If you want to plot graph of some function write it and press 'Plot' button</p>
        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">If you want to plot graphs just list them separated by a ' | '</p>


        <p v-bind:class="{black: !this.$store.state.count, white:this.$store.state.count}">This Web App was made by Daniyil Logvynenko,
          if you have any reccomendations or suggestions write me on email: dannillogvinenko78@gmail.com
        </p>
      </div>
     
  </div>
</template>


<script>
export default {
  components: {
    
  }
}
</script>
<style scoped>
h2,h1 {text-align: center;}
h4 {text-align: center;}
.container{
  padding-right:6.5%;
  padding-left: 6.5%;
}
.black{color:black}
.white{color: #adc1e2;}
.second{
    scroll-behavior: smooth ;
    overflow: auto;
    display: flex;
    flex-direction: column;
    height: 95vh;
    text-align: center;
    background: #272727;
    border-left: 2px solid #adc1e2;
    border-right:2px solid #adc1e2 ;
    border-bottom: 2px solid #adc1e2;
    border-radius: 3px;
    width: 100%;
}
.first{
    scroll-behavior: smooth ;
    overflow: auto;
    display: flex;
    flex-direction: column;
    height: 94.5vh;
    text-align: center;
    background: white;
    border-left: 2px solid #adc1e2;
    border-right:2px solid #adc1e2 ;
    border-bottom: 2px solid #adc1e2;
    border-radius: 3px;
    width: 100%;
 
}
@media screen and (max-width: 767px) {
  .container{
        padding-right:0%;
        padding-left: 0%;
}
.first{
    height: 94.5vh;


}
.second{
    height: 94.5vh;
    border-bottom: 0;


}
}
</style>
