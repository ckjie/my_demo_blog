<template>
	<div class="container blog_article">
		<Article/>
	</div>
</template>

<script>
	import Article from '../components/Article'
	export default {
		name: "LifeArtical",
		components: {
			Article
		}
	}
</script>

<style scoped>
	.blog_article{
		padding-top: 30px;
	}
</style>