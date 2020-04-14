<template>
  <div id="app">
    <div class="t" id="t-body">
		<div id="blog_back" v-on:click="back"><img src="../assets/back.png" style="width: 4%;">所有博文</div>
		<hr/>
		<p id="Blog_title">{{title}}</p>
       <markdown-it-vue :content="htmlMD"/>
     </div>
	 <div class="t1" style="padding-bottom: 2%;">
		  <p style="font-size: 20px;">当前评论 : </p>
		  <hr/>
			  
			  <div v-for="comment in comments" >
				  <div class="comment-body">
				  <p>{{comment.name}} :</p>
				  <div class="md-text">
				 <markdown-it-vue :content="comment.text"/>
				 </div>
				 <span style="font-size: 12px;color: #A9A9A9;margin-top: 3%;"> {{comment.created}}</span>
				
				 </div>
			</div>
	  </div>
	  <div class="t1" style="padding-bottom: 2%;">
		<p style="font-size: 20px;">添加新评论</p>
		<el-input
		  type="text"
		  placeholder="输入称呼"
		  v-model="comment_name"
		  maxlength="10"
		  show-word-limit
		>
		</el-input>
		<div style="margin: 20px 0;"></div>
		<el-input
		  type="textarea"
		  placeholder="请输入内容,支持MD格式"
		  v-model="comment_text"
		  maxlength="350"
		  show-word-limit rows="10"
		>
		</el-input>
		<div style="margin: 10px 0;"></div>
		<el-button type="success" round v-on:click="sendComment">发射biu</el-button>
	  </div>
	  
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import axios from 'axios';
export default {
  name: 'blog',
    components: {
     MarkdownItVue
    },
  data(){
  	return{
  		htmlMD:'',
		title:'',
		lasttime:'',
		comments:'',
		isLoadingComment:false,
		comment_name:'',
		comment_text:'',
		
  	}
  },
  mounted() {
      window.addEventListener("scroll", this.scrollBottom, true);
  },
	methods:{
		sendComment(){
			if(this.comment_name==''||this.comment_text==''){
				  this.$notify.error({
				          title: '错误',
				          message: '名称和内容不可为空'
				   })
				
			}else{
			
				let param = new URLSearchParams()
				var json="{\"a_id\":"+this.$route.params.id+",\"name\":\""+this.comment_name+"\",\"text\":\""+this.comment_text+"\"}"
				
				param.append('json', json)
				
			
				axios({
					  headers: {
					        'Content-Type': 'application/x-www-form-urlencoded;utf-8'
					    },
						//this.$baseUrl+"/addComment"
					url:this.$baseUrl+"/addComment",
					data:param,
					method:'POST',
												
				}).then((response) => {
					if(response.data.state==200){
						this.$notify({
						      title: '成功',
						      message: '评论发送成功',
						      type: 'success'
						    });
							this.comment_name=''
							this.comment_text=''
					}else{
						this.$notify.error({
						        title: '错误',
						        message: '评论失败'
						 })
					}
					　　
				});
				 
			
			}
		},
		back(){
			this.$router.back();
		},
	loadingComment(){
		axios.get(this.$baseUrl+"/comment/"+this.$route.params.id).then((response) => {
			　　　　　　this.comments = response.data.data
		});
	},
	scrollBottom() {
		    // 滚动到页面底部时
			if((document.documentElement.scrollTop+window.screen.height)>document.getElementById("t-body").clientHeight&&this.isLoadingComment==false){
				this.loadingComment();
				this.isLoadingComment=true
			}
		 
		 }
		
		
		
	},
  created(){
	axios.get(this.$baseUrl+"/articleByAid/"+this.$route.params.id).then((response) => {
		　　　　　　this.htmlMD = response.data.data[0].text
				   this.title =	response.data.data[0].title
				   this.lasttime =	response.data.data[0].lasttime
		　　});
  	}, 
}
</script>

<style>
	
	
.input-div {
    font-size: 20px;
    position: relative;	
}
.input-div ::before {
    content: "";
	text-align: center;
    position: absolute;
	bottom: 0;
	left: 0;
    width: 100%;
    background: aquamarine;
    height: 2px;
    transition: transform .99s;
    transform: scaleX(0);
	filter:alpha(Opacity=30);-moz-opacity:0.3;opacity: 0.3;
	z-index: 1;
  }
.input-div :hover::before {
    transform: scaleX(1);
 }
 	
	
	
	
	
	
.md-text{
	padding-left: 3%;
	width: 85%;
}	
.comment-body{
	padding-top: 1%;
	margin-top: 3%;
	margin-bottom: 5%;
	padding-left: 5%;
	padding-bottom: 1%;
	background-color:aliceblue
}

#blog_back{
			color: #A9A9A9;
            cursor: pointer;
            transition: all 0.4s;
      }
#blog_back:hover{
	color: black;
    transform: scale(1.1);
    opacity: 1;
  }

#Blog_title{
	font-size: 40px;
	font-weight:700
	}
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
		padding-bottom: 8%;
		padding-top: 2%;
		filter:alpha(Opacity=90);-moz-opacity:0.9;opacity: 0.9;
		box-shadow: darkgray 1px 1px 1px 1px ;
		
}
</style>
