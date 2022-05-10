<template>
  <main-searcher></main-searcher>
  <main-journals></main-journals>
  <open-articles></open-articles>
  <main-subjects></main-subjects>
  <recent-articles></recent-articles>
</template>

<script>
import MainSearcher from '../UI/MainSearcher.vue';
import MainSubjects from '../UI/MainSubjects.vue';
import OpenArticles from '../UI/OpenArticles.vue';
import RecentArticles from '../UI/RecentArticles.vue';
import MainJournals from '../UI/MainJournals.vue';
export default {
    components: {
        MainSearcher,
        MainSubjects,
        OpenArticles,
        MainJournals,
        RecentArticles 
    }
}
</script>