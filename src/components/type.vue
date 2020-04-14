<template>
  
    <div class="t" v-on:click="getBlog(1)">
       aaaaaaaaaaaaaaaaaaaaaa
	   <div class="t2" v-on:click="getBlog(2)">
	      aaaaaaaaaaaaaaaaaaaaaa
	    </div>
     </div>

</template>

<script>

import axios from 'axios';
export default {
  name: 'type',
    components: {
     
    },
	methods:{
		getBlog(id){
			   this.$router.push({
			          path: `/blog/${id}`,
			        })
		},
	},
  data(){
  	return{
  		htmlMD:''
  	}
  },
  created(){
	  
  	// axios.get("http://localhost:8080/articleByAid/1").then((response) => {
  	// 　　　　　　this.htmlMD = response.data.data[0].text
  	// 　　　　});
  	},
 
  
}
</script>

<style>
.t{
		width: 75%;
	    top: 0px;
	    right: 0px;
	    bottom: 0px;
	    margin: 3% auto;
		background-color: white;
		padding-left: 5%;
		padding-right: 5%;
		height: 100%;
		padding-bottom: 10%;
		padding-top: 2%;
		filter:alpha(Opacity=90);-moz-opacity:0.9;opacity: 0.9;
		box-shadow: darkgray 1px 1px 1px 1px ;
		
}
</style>
