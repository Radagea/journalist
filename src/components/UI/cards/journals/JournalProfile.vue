<template>
    <journal-title></journal-title>
    <journal-menu></journal-menu>
    <section>
        <div class="wrapper clear">
            <div class="articles">
                <result-card v-for="result in searchResults" :key="result.id" :result="result" ></result-card>
            </div>
            <div class="left">
            </div>
        </div>
    </section>
</template>

<script>
import JournalTitle from './JournalTitle.vue';
import JournalMenu from './JournalMenu.vue';
import ResultCard from '../../cards/SearchingCards/ResultCard.vue';

export default {
    created() {
        fetch(this.$linkToAPI+'articles/read.php').then((response) => {
        if(response.ok) {
            return response.json();
        }
        }).then((data) => {
        const results = [];
        for (const id in data) {
            results.push({
            id: data[id].id,
            title: data[id].title,
            authors: data[id].authors,
            views: data[id].views,
            published: data[id].publishedtime,
            type: data[id].type,
            oa: data[id].oa
            })
        }
        this.searchResults = results;
        });
    },
    components: {
        JournalTitle,
        JournalMenu,
        ResultCard
    },
    data() {
        return {
            searchResults: []
        };
    }
}
</script>

<style scoped>
    section {
        width: 100%;
        background-color: #feeeee;
        padding-bottom: 50px;
        padding-top: 30px;
    }
    .wrapper {
        width: 95%;
        max-width: 1400px;
        margin: 0 auto;
    }
    .articles {
        width: 70%;
        float: left;
    }
    .left {
        width: 30%;
        height: 35rem;
        /* background-color: black; */
        float: left;
    }
</style>