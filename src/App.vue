<template>
  <div id="app">
		<div id="left">
			<div id="title_table">
				<div id="blog_icon">
				<div id="icon">
					<img id="icon_img" :src='blog_icon'/>
				</div>
					
					<div id="blog_title">{{blog_title}}</div>
					<div id="blog_slug" >{{blog_slug}}</div>
				</div>
				<div id="item">
					<div class="iteam-text div1" v-on:click="getAllblog"><a>笔记</a></div>
					<div class="iteam-text div1" v-on:click="getType">分类</div>
					
					<div class="iteam-text div1"><a href="https://github.com/6yi">Github</a></div>
					<div class="iteam-text div1">关于</div>
				</div>
				
			</div>	
		</div>
		<div id="right">
			<router-view></router-view>
		</div>
  </div>
</template>
<script>
import axios from 'axios';
import blog from './components/blog.vue'
export default {
  name: 'App',
    components: {
		blog
    },
  data(){
  	return{
  		blog_title:'',
		blog_slug:'',
		blog_icon:''
  	}
  },
  methods:{
	getBlog(id){
		   this.$router.push({
		          path: `/blog/${id}`,
		        })
	},
	getType(){
		this.$router.push({
		       path: `/type`,
		     })
	},
	getAllblog(){
		this.$router.push({
		       path: `/allblog`,
		     })
	}
	  
  },
  created(){ 
  	axios.get(this.$baseUrl+"/option").then((response) => {
				console.log(response.data.data)
  	　　　　　	this.blog_slug=response.data.data.blog_slug
				this.blog_title=response.data.data.blog_title
				this.blog_icon=response.data.data.blog_Icon
  	　　　　});
  	},
}
</script>

<style>
a{
	 text-decoration:none;
}
.div1 {
    font-size: 20px;
    position: relative;
/*    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: 20px; */
}
.div1::before {
    content: "";
	text-align: center;
    position: absolute;
	bottom: 0;
	left: 0;
    width: 100%;
    background: aquamarine;
    height: 3px;
    transition: transform .5s;
    transform: scaleX(0);
  }
.div1:hover::before {
    transform: scaleX(1);
 }
	
	



#item{
		width: 100%;
		height: 80%;
		margin-top: 10%;
		font-size: 25px;
		font-weight: 200;
		text-align: center;
		margin-top: 10%;
}
#icon{
	
	margin: 10px auto;
	width: 75%;
	/* padding-left:10%; */
	overflow:hidden;
	border-radius:35%;
}
#icon_img{
	width: 100%;
}
	

.iteam-text{
	margin-top: 15%;
	cursor: pointer;
}
#blog_icon{
	width: 90%;
}
#blog_title{
	text-align: center;
	font-size: 40px;
	font-weight: bold;	
}
#blog_slug{
	text-align: right;
	font-size: 20px;
	font-weight: 200;
}	
html{
	background-image: url(./assets/ting.jpg);
	background-repeat:no-repeat ;
	background-size:100% 100%;
	background-attachment: fixed;
	overflow:scroll;
	overflow-x:hidden
}	
	

#title_table{
	height: 43%;
	width: 100%;
	background-color:white;
}	

#right{
	position: absolute;
	width: 75%;
	height: 100%;
	right: 0;
	top: 0;
	margin: 0;
}

#left{
	position: fixed;
	height: 100%;
	width: 24%;
	top: 0;
	left: 0;
	margin: auto;
	filter:alpha(Opacity=90);-moz-opacity:0.9;opacity: 0.9;
	/* box-shadow: gray 5px 5px 5px 5px ; */
	background-color:#F0F8FF;
	
}


</style>
