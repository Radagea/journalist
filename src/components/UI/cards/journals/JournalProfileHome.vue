<template>
  <section>
        <div class="wrapper clear">
            <div class="articles">
                <h3>
                    View:
                    <span @click="latestSort" v-if="recentClicked">most recent</span>
                    <span @click="latestSort" v-else>oldest</span> 
                    <span @click="mostViewedSort" v-if="viewedClicked">most views</span>
                    <span @click="mostViewedSort" v-else>less views</span>

                </h3>
                <the-loader v-if="isLoading" />
                <result-card v-else v-for="result in searchResults" :key="result.id" :result="result" ></result-card>
            </div>
            <email-box></email-box>
        </div>
    </section>
</template>

<script>
import ResultCard from '../../cards/SearchingCards/ResultCard.vue';
import TheLoader from '../../elements/TheLoader.vue';
import emailBox from './elements/emailBox.vue';
export default {
    created() {
        fetch(this.$linkToAPI+'articles/read_from_jid.php?jid='+this.$route.params.id).then((response) => {
            if(response.ok) {
                return response.json();
            }
        }).then((data) => {
            const results = [];
            for (const id in data) {
                results.push({
                    id: data[id].id,
                    title:  data[id].title,
                    abstract: data[id].abstract,
                    authors: data[id].authors,
                    keywords: data[id].keywords,
                    publishedtime: data[id].publishedtime,
                    views: data[id].views,
                    type: data[id].type,
                    oa: data[id].oa,
                    journalid: data[id].journalid,
                    journalName: data[id].journalName,
                    articleNumber: data[id].articleNumber
                })
            }
            this.isLoading = false;
            this.searchResults = results;
        });
    },
    data() {
        return {
            searchResults: [],
            recentClicked: false,
            viewedClicked: false,
            isLoading: true,
        };
    },
    methods: {
        latestSort() {
            if(!this.recentClicked) {
                this.searchResults = this.searchResults.sort((a,b) => {
                    const dateA = new Date(a.publishedtime);
                    const dateB = new Date(b.publishedtime);
                    return dateA - dateB;
                });
            } else {
                this.searchResults = this.searchResults.sort((b,a) => {
                    const dateA = new Date(a.publishedtime);
                    const dateB = new Date(b.publishedtime);
                    return dateA - dateB;
                });
            }
            this.recentClicked = !this.recentClicked;
        },
        mostViewedSort() {
            if(!this.viewedClicked) {
                this.searchResults = this.searchResults.sort((a,b) => {
                    return a.views - b.views;
                });
            } else {
                this.searchResults = this.searchResults.sort((b,a) => {
                    return a.views - b.views;
                });
            }
            this.viewedClicked = !this.viewedClicked;
        }
    },
    components: {
        ResultCard,
        TheLoader,
        emailBox
    }
}
</script>

<style scoped>
    section {
        width: 100%;
        background-color: #eaf2f2;
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
    .articles h3 {
        margin-bottom: 20px;
    }
    .articles h3 span {
        font-weight: 200;
        margin-left: 25px;
        cursor: pointer;
    }
</style>