<template>
    <journal-in-article :journal="articleData.journalName" :journalid="articleData.journalid" :articleNumber="articleData.articleNumber"></journal-in-article>
    <article-title :articleData="articleData" @menuID="setActiveMenu"></article-title>
    <article-abstract v-if="activeMenu == 1" :abstract="articleData.abstract"></article-abstract>
    <article-fulltext v-if="activeMenu == 2"></article-fulltext>
    <article-editor v-if="activeMenu == 3"></article-editor>
</template>

<script>
import JournalInArticle from '../UI/cards/articles/JournalInArticle.vue';
import ArticleTitle from '../UI/cards/articles/ArticleTitle.vue';
import ArticleAbstract from '../UI/cards/articles/ArticleAbstract.vue';
import ArticleFulltext from '../UI/cards/articles/ArticleFulltext.vue';
import ArticleEditor from '../UI/cards/articles/editor/ArticleEditor.vue';
export default {
    created() {
        fetch(this.$linkToAPI+'articles/read_one.php?id='+this.$route.params.id).then((response) => {
            if(response.ok) {
                return response.json();
            }
        }).then((data) => {
            this.articleData = {
                id: data.id,
                title:  data.title,
                abstract: data.abstract,
                authors: data.authors,
                keywords: data.keywords,
                publishedtime: data.publishedtime,
                views: data.views,
                type: data.type,
                oa: data.oa,
                journalid: data.journalid,
                journalName: data.journalName,
                articleNumber: data.articleNumber
            }
        });
    },
    methods: {
        setActiveMenu(id) {
            this.activeMenu = id;
        }
    },
    data() {
        return {
            articleData: [],
            activeMenu: 1,
        };
    },
    components: {
        JournalInArticle,
        ArticleTitle,
        ArticleAbstract,
        ArticleFulltext,
        ArticleEditor
    },
    emits: ["openArticlesPopup"],
}
</script>

<style scoped>
    
</style>