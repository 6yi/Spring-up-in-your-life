<template>

    <div class="t1">
		<div id="example-1" >
			  <div v-for="title in titles" class="title-item div2" v-on:click="getBlog(title.a_id)"> 
				   <p class="title-font">{{title.title}}</p>
				   <p class="title-text">{{title.text}}............
				   </p>
			   <p class="title-read">阅读全文</p>
			    <p class="title-time">{{title.create_time}}</p>
			  </div>
		</div>
		
    </div>


</template>

<script>
import axios from 'axios';
export default {
  name: 'allblog',
	methods:{
		getBlog(id){
			   this.$router.push({
			          path: `/blog/${id}`
			 })
		},
	},
	data(){
		return{
			titles:''
		}
	},
	
	created() {
		axios.get(this.$baseUrl+"/title").then((response) => {
				console.log(response.data.data)
			　　　　　　this.titles = response.data.data
			　});
	},

  
}
</script>

<style>
	
.div2 {
    font-size: 20px;
    position: relative;
/*    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: 20px; */
	 cursor: pointer;
	
	
}
.div2::before {
    content: "";
	text-align: center;
    position: absolute;
	bottom: 0;
	left: 0;
    width: 100%;
    background: aquamarine;
    height: 100%;
    transition: transform .99s;
    transform: scaleX(0);
	filter:alpha(Opacity=30);-moz-opacity:0.3;opacity: 0.3;
	z-index: 1;
  }
.div2:hover::before {
    transform: scaleX(1);
 }
 

#example-1{
	margin-bottom: 20%;
}	
.title-read{
	padding-left: 2%;
	z-index: 99;
}
.title-time{
	position: relative;
	padding-left: 2%;
	padding-bottom: 3px;
	color: #A9A9A9;
	
}
.title-font{
		font-size: 35px;
		font-weight: 500;
		padding-left: 4%;
		padding-right: 4%;
		padding-top: 3%;
}
.title-text{
	font-size: 16px;
	font-weight: 200;
	padding-left: 4%;
	padding-right: 4%;

	margin: auto;
	color:dimgrey
}


.title-item{
	background-color: #F0F8FF;
		
}
.t1{
		width: 75%;
	    top: 0px;
	    right: 0px;
	    bottom: 0px;
	    margin: 3% auto;
		background-color: white;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 10%;
		padding-top: 2%;
		filter:alpha(Opacity=90);-moz-opacity:0.9;opacity: 0.9;
		box-shadow: darkgray 1px 1px 1px 1px ;
		
}
</style>
