<template>
     <div>
        <ul id="messages" ref="mess" >
       
        </ul>
    </div>
</template>


<script>
export default {
    components:{

    },
    data(){
        return{
            
        }
    }
}
</script>
<style >
#messages{
    display: inline;
    overflow-y: scroll;
    list-style: none;
    /*height: 250px;
    width: 720px;*/
    overflow: auto;
  
  }
.print1{
        text-align:right;
        padding-right: 20px;
        color:#adc1e2;
        background-color: #2D3748;
        margin-top : 5px;
        margin-bottom: 5px;
        border-radius: 5px;
}
.print{ 
        text-align:right;
        padding-right: 20px;
        margin-top : 5px;
        margin-bottom: 5px;
        background-color: #eee;
        border-radius: 5px;}
.output1{
        text-align:left; 
        color:#adc1e2;
        margin-top : 5px;
        margin-bottom: 5px;
        padding-left: 20px;
        border-radius: 5px;
}
.output{
        text-align:left; 
        margin-top : 5px;
        margin-bottom: 5px;
        padding-left: 20px;
        background-color: white;
        border-radius: 5px;
}
</style>