<template>
  <main-searcher></main-searcher>
  <main-subjects></main-subjects>
  <open-articles @openArticlePopup="openArticlePopup"></open-articles>
  <main-journals></main-journals>
  <recent-articles></recent-articles>
</template>

<script>
import MainSearcher from '../UI/MainSearcher.vue';
import MainSubjects from '../UI/MainSubjects.vue';
import OpenArticles from '../UI/OpenArticles.vue';
import RecentArticles from '../UI/RecentArticles.vue';
import MainJournals from '../UI/MainJournals.vue';
export default {
    emits: ['openArticlesPopup'],
    components: {
        MainSearcher,
        MainSubjects,
        OpenArticles,
        MainJournals,
        RecentArticles 
    },
    methods: {
      openArticlePopup(e) {
        this.$emit('openArticlesPopup',e);
      }
    }
}
</script>