<template>
	<header id='blog_header'>
		<div class="container">
			<div class="row">
				<h2 class="col-md-4 offset-md-2 my-blog">
					<a class="text-light" href="javascript:void(0);">我的博客</a>
				</h2>
			</div>
			<br/>
			<div class="row">
				<h3 class="col-md-4 offset-md-7 text-right d-none d-md-block text-nowrap my-greeting">最诚挚的问候......</h3>
			</div>
			<div class="row">
				<ul class="nav nav-pills navbar-nav navbar-expand-md nav-justified col-md-12 navigation"  role="tablist">
					<li class="nav-item">
						<router-link to="/Blogindex" class='nav-link' data-toggle="pill">博客首页</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/Blogartical" class='nav-link' data-toggle="pill">技术文章</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/Lifeartical" class='nav-link' data-toggle="pill">生活文章</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/About" class='nav-link' data-toggle="pill">关于博主</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/Board" class='nav-link' data-toggle="pill">留言板</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>


<script>
	export default{
		name: 'Header'
	}
</script>

<style scoped>
	#blog_header{
		background: url('../assets/headbg.jpg') no-repeat center center;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		padding-top: 20px;
		color: #c0a16b;
	}

	#blog_header .my-blog a{
		text-decoration: none;
		color: #fff;
	}

	#blog_header .navigation{
		font-size: 20px;
	}
</style>