<template>
	<div class="article">
		<h5 class="article_head">
			<span class="float-left font-weight-bold small">文章推荐</span>
			<span class="float-right d-inline">
				<a href="javascript:void(0);">栏目标题</a>
				<a href="javascript:void(0);">栏目标题</a>
				<a href="javascript:void(0);">栏目标题</a>
			</span>
		</h5>
		<div class="blogs">
			<div v-for='(item, index) in blogList' :key='index'>
				<figure class='float-left'>
					<img :src="`${item.imgSrc}`">
				</figure>
				<h3 class='font-weight-bold'><a href="javascript:void(0);">{{item.name}}</a></h3>
				<p>{{item.content}}</p>
				<p class="blog_title">
					<span class="float-left"><a href="javascript:void(0);">个人博客</a></span>
					<span class="float-left">2018年*月*日</span>
					<span class="float-right">浏览（<a href="javascript:void(0);">459</a>）</span>
					<span class="float-right">评论（<a href="javascript:void(0);">30</a>）</span>
				</p>
				<div class='extra'></div>
			</div>
		</div>
	</div>
</template>


<script>
	import axios from 'axios'
	export default{
		name: 'Article',
		data(){
			return {
				blogList: []
			}
		},
		created(){
			axios.get("static/mydata/blogs.json")
				.then(response => {
					if(response){
						this.blogList.push(...response.data);
					}
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.article .article_head{
		padding: 10px;
		line-height: 25px;
	}

	.article .article_head a{
		font-size: 14px;
	}

	.article .blogs{
		border-top: 4px solid #db6d4c;
		margin-top: 20px;
		padding: 40px 0;
		position: relative;
		overflow: hidden;
	}

	.article .blogs h3{
		font-size: 16px;
		transition: all 0.5s;
		padding-bottom: 10px;
	}

	.article .blogs h3 a{
		color: #474645;
	}

	.article .blogs h3 a:hover{
		color: #066;
	}

	.article .blogs figure{
		width: 200px;
		height: 100px;
		margin: 40px 20px 0 0;
		overflow: hidden;
	}

	.article .blogs figure img{
		width: 200px;
		height: 100px;
	    -moz-transition: all 0.5s;
	    -webkit-transition: all 0.5s;
	    -o-transition: all 0.5s;
	    transition: all 0.5s;
	}

	.article .blogs figure:hover img{
	    -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    -o-transform: scale(1.1);
	    -ms-transform: scale(1.1);
	}

	.article .blogs p{
		font-size: 14px;
	}

	.article .blogs .blog_title{
		overflow: hidden;
		clear: both;
		margin: 5px 0;
		display: inline-block;
		color: #838383;
		width: 100%;
	}

	.article .blogs .blog_title span{
		margin: 0 10px 0 0;
	    padding-left: 20px;
	}

	.article .blogs .blog_title span a{
		color: #759b08;
	}

	.extra{
		clear: both;
		padding-bottom: 30px;
	}
</style>