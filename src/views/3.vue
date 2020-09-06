<template>
  <div class='container' >
<!--class='container'-->
    <div id='app' v-bind:class="{app2: !this.$store.state.count, app3:this.$store.state.count}">
    <div id="plot" v-bind:class="{showtime: !this.$store.state.count, showtime2:this.$store.state.count}"></div> 
    <form id = "form1" v-on:submit.prevent="plot">
            <input id = "input2" autocomplete="off" v-on:focus="show"   ref="input"   type="text" v-bind:class="{ input2: !this.$store.state.count, input3:this.$store.state.count}"  v-on:change="change" placeholder = "Enter a plot" autoFocus=true />
          
        </form>       
        <div v-show="toshow" v-bind:class="{ buttons: !this.$store.state.count, buttons1:this.$store.state.count}" >   
        <div class="b1 row">
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(1)" >1</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(2)"  >2</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(3)" >3</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('^')">^</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText2('√(x)')"> √(x)</button>
            <button  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('x')">x</button>
            <button  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('y')">y</button>
            <button  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('z')">z</button>
           
            <button  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('|')">|</button>                        
        </div>        
                <div class="b1 row">
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('4')" >4</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('5')" >5</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('6')" >6</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('+')" >+</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('/')" >/</button>
                    <button id="special4"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special5" >sin(x)</button>
                    <button id="special5"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special6" >cos(x)</button>
                    <button id="special6"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special7" > tan(x)</button>
                    <button id="special3"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special3" >In(x)</button>
                </div>
                <div class="b1 row">
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(7)" >7</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(8)" >8</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(9)" >9</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('-')">-</button>

                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('*')" >*</button>
                    <button  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('π')" >π</button>
                    <button  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('e')">e</button>
                    <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="chbuttons">
                        <span class="material-icons">
                            sync_alt
                            </span>
                    </button>

                    <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="cancelText" v-on:dblclick.prevent="cancelEv">
                        <span class="material-icons " >
                            backspace
                        </span>
                    </button>
               </div>
                <div class="b1 row">
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('.')" >.</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(0)" >0</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(',')" >,</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('(')">(</button>                
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText(')')">)</button>
                   
                    <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}"  v-on:mousedown.prevent="moveCaret1">
                        <span class="material-icons">
                           keyboard_arrow_left

                        </span>
                     </button>
                     <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}"  v-on:mousedown.prevent="hide">
                        <span class="material-icons"> keyboard_arrow_down</span>
                     </button>
                     <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="moveCaret2">
                            <span class="material-icons">
                                keyboard_arrow_right

                            </span>
                     </button>
                    <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="plot" v-on:dblclick.prevent="changeCompon"> Plot </button>
                </div>

                        </div>

                    </div>


  </div>
</template>


<script>
import {bus} from '../main'
export default {
  components: {
    
  },
  data(){
    return{
      data:'',
      toshow:true,
      changeButtons:false


    }
  },
  mounted(){
    if(window.innerWidth <= 600){
        document.getElementById("input2").setAttribute("readonly", "true");
    }
  },
  methods:{
    hide:function(){
        this.toshow=false;
        let i = document.getElementById("input2")
        i.blur()
    },
    show:function(){
        this.toshow=true
    },
    special3:function(){
        if (this.changeButtons===false) {this.putText3('In(x)')}
        else{this.putText5('log(x,base)')}
    },
    special5:function(){
        if (this.changeButtons===false) {this.putText4('sin(x)')}
        else{this.putText5('asin()')}
    },
    special6:function(){
        if (this.changeButtons===false) {this.putText4('cos(x)')}
        else{this.putText5('acos()')}
    },
    special7:function(){
        if (this.changeButtons===false) {this.putText4('tan(x)')}
        else{this.putText5('atan()')}
    },
    chbuttons:function(){
        if (this.changeButtons===false) {
            this.changeButtons=true
            let x3 = document.querySelector('#special3')
            let x4 = document.querySelector('#special4')
            let x5 = document.querySelector('#special5')
            let x6 = document.querySelector('#special6')
            x3.innerText='log(x)'
            x4.innerText='asin(x)'
            x5.innerText='acos(x)'
            x6.innerText='atan(x)'

        }
        else {
            this.changeButtons=false
            let x3 = document.querySelector('#special3')
            let x4 = document.querySelector('#special4')
            let x5 = document.querySelector('#special5')
            let x6 = document.querySelector('#special6')
            x3.innerText='In(x)'
            x4.innerText='sin(x)'
            x5.innerText='cos(x)'
            x6.innerText='tan(x)'
        }
    },
    plot :function(){
       // const chatMessages = document.querySelector('#showtime');
        let r = this.$refs.input.value
        this.hide()
        r= this.transformLight(r)
        r = r.split('|')
        let o = []
        //r= this.transformLight(r)
        //this.dataToPlot =r
        r.forEach(eq => {
 /*           if(r.includes('asin') || r.includes('acos')) {
                const expr = math.compile(eq)
                const xValues = math.range(-1, 1, 0.01).toArray()
                const yValues = xValues.map(function (x) {
                return expr.evaluate({x: x})
                })
                const trace1 = {
                x: xValues,
                y: yValues,
                name:eq,
                type: 'scatter'
                }
                o.push(trace1)
            } if(r.includes('factorial') || r.includes('{')) {
                const expr = math.compile(eq)
                const xValues = math.range(1, 50).toArray()
                const yValues = xValues.map(function (x) {
                return expr.evaluate({x: x})
                })
                const trace1 = {
                x: xValues,
                y: yValues,
                name:eq,
                type: 'scatter'
                }
                o.push(trace1)  
            }

            else {*/
            const expr = math.compile(eq)
            const xValues = math.range(-50, 50, 0.01).toArray()
            const yValues = xValues.map(function (x) {
              return expr.evaluate({x: x})
            })
            const trace1 = {
              x: xValues,
              y: yValues,
              name:eq,
              type: 'scatter'
            }
            o.push(trace1)
        })
        var layout = {
          xaxis:{range:[-20,20]},
          yaxis:{range:[-20,20]},
        
        };  
        var config={
            scrollZoom: true,
            responsive:true

        }
        const data = o
        setTimeout(function(){Plotly.newPlot('plot', data, layout,config)}, 200);
        //bus.$emit('dataToplot',this.dataToPlot)
        console.log('loook at 3rd')
        //this.comToShow = 'third'
        //let w = r.split(',')
        /*this.hide()
       const chatMessages = document.querySelector('#showtime');
        function test(x){return eval('x**2')}
        function test2(x){return eval('x**3')}
        setTimeout(function(){
            var board = JXG.JSXGraph.initBoard('showtime', {boundingbox: [-20, 20, 20, -20], axis:true, grid:true});
            var p = board.create('functiongraph', [test], {style:6, name:'p'}); 
            var x = board.create('functiongraph', [test2], {style:6, name:'s'});
            },200)
        
       // this.$emit('func',r)*/

    },

      transformLight:function(val) {
          let r = val
        if (r.includes('π'))  {
            r = r.replace(/π/g,'pi')}
        if (r.includes('√')) {
            r = r.replace(/√/g,'sqrt')
            }
        if (r.includes('In')) {
            r = r.replace(/In/g,'log')
            }
        if (r.includes('{')) {r= r.replace(/{/g,'factorial(')}
        if (r.includes('}!')) {r =r.replace(/}!/g,')')}
        
        return r
      },
      putText:function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+1,caretPos+1)
        },
        putText2: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+2,caretPos+2)
        },
        putText3: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+3,caretPos+3)
        },
        putText4: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+4,caretPos+4)
        },
        putText5: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+5,caretPos+5)
        },
        cancelText:function() {
            let i = this.$refs.input
            var textAreaTxt = i.value;
            var caretPos = this.$refs.input.selectionStart
            let o =textAreaTxt.substring(0, caretPos-1);
            let w = textAreaTxt.substring(caretPos)
            let r = o + w;
            this.$refs.input.value= r,
            this.caret= caretPos,
            this.$refs.input.setSelectionRange(caretPos-1,caretPos-1)
        },
        moveCaret1:function() {
            let i = this.$refs.input;
            this.$refs.input.setSelectionRange(i.selectionStart-1,i.selectionStart-1)
        },  
        moveCaret2:function() {
            let i = this.$refs.input;
            this.$refs.input.setSelectionRange(i.selectionStart+1,i.selectionStart+1)
        },
        space:function() {
            let i = this.$refs.input
            var textAreaTxt = i.value;
            var caretPos = this.$refs.input.selectionStart
            let o =textAreaTxt.substring(0, caretPos);
            let y = o + " ";
            let w = textAreaTxt.substring(caretPos)
            let r = y + w;
            this.$refs.input.value= r,
            this.caret=caretPos
            this.$refs.input.setSelectionRange(y.length,y.length)
        },
        change: function() {
            console.log('ss')
        },
        cancelEv:function() {
            this.$refs.input.value= "";
        }
  }

  
}
</script>
<style scoped>

.container {
    padding-right:6.5%;
    padding-left: 6.5%;
}
.row{
    margin-right: 0px;
    margin-left: 0px;
}

.b1{
 text-align: center;

}
.buttons{
    background-color: #c7d2e7;
}
/*from home.vue */
.special{
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 6px;
    line-height: 24px;
    margin-right: 0.1%;
    border:0px;
    border-bottom: 1px solid #738dc3;
    color: #333;
    background: #eaeff6;
    width: 11%;

}

.int2{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;


    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.1%;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    border:0px;
    border-bottom: 1px solid aliceblue;
    color: #adc1e2;
    background: #272727;
    width: 11%;
}
.int {
    /*btn*/
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;


    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.1%;
    background: #fff;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #738dc3;
    width: 11%;
}
.control2{
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.1%;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    border:0px;
    border-bottom: 1px solid #738dc3;
    color: #adc1e2;
    background: #272727;
    width: 11%;   
}
 .control{
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.1%;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    border:0px;
    border-bottom: 1px solid #738dc3;
    color: aliceblue;
    background: #adc1e2;
    width: 11%;
}
.calc2{
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.1%;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    border:0px;
    border-bottom: 1px solid #738dc3;
    color: #adc1e2;
    background: #272727;
    width: 11%;
}
.calc{
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.1%;
    font-size: 16px;
    border-radius: 6px;
    line-height: 24px;
    border:0px;
    border-bottom: 1px solid #738dc3;
    color: #333;
    background: #eaeff6;
    width: 11%;
  }

.b1{text-align: center;}
.buttons{background-color: #c7d2e7;}
.buttons1{background-color: #1A202C;}
.container {
    padding-right:6.5%;
    padding-left: 6.5%;
}
.row{
    margin-right: 0px;
    margin-left: 0px;
}
.showtime{
    flex-grow: 3;
    scroll-behavior: smooth ;
    overflow: auto;
    height: 325px;
    width: 100%;
    border: rgb(0, 0, 0) 1px;
    background-color:white;
  }
.showtime2{
    flex-grow: 3;
    scroll-behavior: smooth ;
    overflow: auto;
    height: 325px;
    width: 100%;
    border: rgb(0, 0, 0) 1px;
    background-color:#272727;   
}
.app3{
    display: flex;
    flex-direction: column;
    height: 95vh;
    border-left: 2px solid #adc1e2;
    border-right:2px solid #adc1e2 ;
    border-radius: 3px;
    border-bottom: 2px solid #adc1e2;

    width: 100%; 
}
.app2{
    display: flex;
    flex-direction: column;
    height: 94.5vh;
    border-left: 2px solid #adc1e2;
    border-right:2px solid #adc1e2 ;
    border-bottom: 2px solid #adc1e2;
    border-radius: 3px;
    width: 100%;
 
}
.input2:focus{
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
.input2{
        display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    background-color: white;
    margin-left:0 auto;
    margin-right:0 auto;
    border-radius: 6px; 
    text-align: center;
}
.input3{
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #adc1e2;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    background-color:#272727 ;
    margin-left:0 auto;
    margin-right:0 auto;
    border-radius: 6px; 
    border-color: aliceblue;
    text-align: center;   
}
/*end */ 
@media screen and (max-width: 767px) {
    #plot{
        height: 242px;
        flex-grow: 3
     }
    .app2{
        width: 100% ;
        display: flex;
        flex-direction: column;
        height: 94.5vh;
    }
    .app3{
        width: 100% ;
        display: flex;
        flex-direction: column;
        height: 94.5vh;
        border-bottom: 0;
 
    }   
    .container {
        padding-right:0%;
        padding-left: 0%;
    }
    .int {
        margin-top: 0.1%;
        border-bottom: 1px solid #738dc3;
        margin-right: 0.1%;
        margin-bottom: 0.1%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11%;
    }
    .calc2{
        margin-right: 0.1%;
        margin-bottom: 0.1%;
        margin-top: 0.1%;
        border:0px;
        border-bottom: 1px solid #738dc3;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 60%;
        width: 11%;
    }
    .calc{
        margin-right: 0.1%;
        margin-bottom: 0.1%;
        margin-top: 0.1%;
        border-bottom: 1px solid #738dc3;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 60%;
        width: 11%;
    }

    .control{
        margin-right: 0.1%;
        margin-bottom: 0.1%;
        margin-top: 0.1%;
        border-bottom: 1px solid #738dc3;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 60%;
        width: 11%;

    }
    .special{
        margin-bottom: 0.1%;
        margin-top: 0.1%;
        border-bottom: 1px solid #738dc3;
        margin-right: 0.1%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100%;
        width: 11%;
    }
}
</style>
