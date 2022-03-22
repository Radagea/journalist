<template>
    <journal-in-article></journal-in-article>
    <article-title></article-title>
    <main></main>
</template>

<script>
import JournalInArticle from '../UI/cards/articles/JournalInArticle.vue';
import ArticleTitle from '../UI/cards/articles/ArticleTitle.vue';
export default {
    components: {
        JournalInArticle,
        ArticleTitle
    }
}
</script>

<style scoped>
    main {
        width: 100%;
        height: 50rem;
        background-color: white;
    }
</style>