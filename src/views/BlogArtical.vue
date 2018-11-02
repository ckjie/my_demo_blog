<template>
	<div class="container blog_article">
		<Article/>
	</div>
</template>

<script>
	import Article from '../components/Article'
	export default {
		name: "BlogArtical",
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