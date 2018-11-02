<template>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<Carousel/>
					<Article/>
				</div>
				<div class="col-md-4">
					<Social/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Carousel from '../components/Carousel'
	import Article from '../components/Article'
	import Social from '../components/Social'
	export default{
		name: 'BlogIndex',
		components:{
			Carousel,
			Article,
			Social
		}
	}
</script>

<style scoped>

</style>