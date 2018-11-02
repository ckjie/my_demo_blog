<template>
	<div class="social">
		<div class="row">
			<div class="col-md-12">
				<h3>关注我</h3>
				<div class="row about_me">
					<ul>
						<li>
							<a class="sina text-nowrap" href="javascript:void(0);">新浪微博</a>
						</li>
						<li>
							<a class="tencent text-nowrap" href="javascript:void(0);">腾讯微博</a>
						</li>
						<li>
							<a class="mail text-nowrap" href="javascript:void(0);">邮箱</a>
						</li>
						<li>
							<a class="wechat text-nowrap" href="javascript:void(0);"><img src="../assets/wechat.jpg" alt="微信二维码" width='100px;'>微信</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="recommend text-nowrap">
			<ul class="nav nav-tabs nav-justified" role='tablist'>
				<li class="nav-item">
					<a class="nav-link active" data-toggle='tab' href="#menu1">点击排行</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle='tab' href="#menu2">最新文章</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle='tab' href="#menu3">站长推荐</a>
				</li>
			</ul>
			<div class="tab-content recommend_body row">
				<div id='menu1' class="tab-pane container active">
					<ul class='col-md-10 col-md-offset-2'>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">世界如此美好</a>
						</li>
					</ul>
				</div>
				<div id='menu2' class="tab-pane container">
					<ul class='col-md-10 col-md-offset-2'>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
						<li>
							<a href="javascript:void(0);">明天依旧美好</a>
						</li>
					</ul>
				</div>
				<div id='menu3' class="tab-pane container">
					<ul class='col-md-10 col-md-offset-2'>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
						<li>
							<a href="javascript:void(0);">将来定会更好</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>



</template>


<script>
	export default{
		name: 'Social'
	}
</script>

<style scoped>
	.social{
		padding-top: 60px;
	}

	ul, li{
		list-style: none;
	}

	.social .about_me ul{
		width: 100%;
		padding: 30px 0;
		text-align: center;
	}

	.social .about_me ul li:nth-last-child(1){
		margin-left: 10px;
	}

	.social .about_me li{
		display: inline-block;
		padding: 20px 15px;
		float: left;
	}

	.social .about_me li a{
		color: #747F8C;
		padding-top: 40px;
		float: left;
		font-size: 14px;
	}

	.social .about_me .sina{
		background: url('/static/pngs/sina.png') no-repeat center top;
		padding-left: 10px;
		background-size: 30px 30px;
	}

	.social .about_me .tencent{
		background: url('/static/pngs/tencent.png') no-repeat center top;
		background-size: 30px 30px;
	}

	.social .about_me .mail{
		background: url('/static/pngs/mail.png') no-repeat center top;
		background-size: 30px 30px;
	}

	.social .about_me .wechat{
		position: relative;
		background: url('/static/pngs/wechat.png') no-repeat center top;
		background-size: 30px 30px;
	}

	.social .about_me a:hover{
		color: #000;
	}

	.social .about_me .wechat img{
		position: absolute;
		display: none;
		top: 50%;
		left: 50%;
		margin-top: -55px;
		margin-left: 20px;
	}

	.social .about_me .wechat:hover img{
		display: block;
	}

	.recommend{
		line-height: 32px;
		font-size: 15px;
	}

	.recommend .recommend_body{
		margin-right: -85px;
	}

	.recommend .recommend_body ul{
		padding: 0;
	}

	.recommend .recommend_body a{
		display: block;
		line-height: 40px;
		text-indent: 20px;
		text-decoration: none;
		background-color: #d0e9c6;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	.recommend .recommend_body ul li{
		overflow: hidden;
	}

	.recommend .recommend_body ul>li+li{
		border-top: 1px solid #fff;
	}

	.recommend .recommend_body ul li:hover {
   		border-bottom: #000 1px solid;
  	}

  	.recommend .recommend_body ul li a:hover{
  		color: #333;
  	}
</style>