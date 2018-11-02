<template>
	<div id='my_carousel' class="carousel slide" data-ride='carousel'>
		<ul class="carousel-indicators">
			<li data-target='#my_carousel' data-slide-to='0' class="active"></li>
			<li data-target='#my_carousel' data-slide-to='1'></li>
			<li data-target='#my_carousel' data-slide-to='2'></li>
			<li data-target='#my_carousel' data-slide-to='3'></li>
		</ul>

		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="../assets/carousel_01.jpg" alt="东京喰种">
			</div>
			<div class="carousel-item">
				<img src="../assets/carousel_02.jpg" alt="混沌武士">
			</div>
			<div class="carousel-item">
				<img src="../assets/carousel_03.jpg" alt="刀剑神域">
			</div>
			<div class="carousel-item">
				<img src="../assets/carousel_04.jpg" alt="从零开始">
			</div>
		</div>
		<a class="carousel-control-prev" href="#my_carousel" data-slide='prev'>
			<span class="carousel-control-prev-icon"></span>
		</a>
		<a class="carousel-control-next" href="#my_carousel" data-slide='next'>
			<span class="carousel-control-next-icon"></span>
		</a>
	</div>
</template>


<script>
	export default{
		name: 'Carousel'
	}
</script>

<style scoped>
	#my_carousel{
		margin: 50px auto;
		width: 90%;
		height: 258px;
	}
	#my_carousel img{
		width: 100%;
		height: 258px;
	}
</style>