<template>
  <section>
        <div class="arrowclear">
            <div class="arrow-down"></div>
        </div>
        <div class="maincards">
            <div class="title"><h1>Open Access:</h1></div>
            <open-articles-cards @open="openArticlePopup"></open-articles-cards>
            <div class="link">
                <a @click="navigateInto">All Open Access</a>
            </div>
        </div>
  </section>
</template>

<script>
import OpenArticlesCards from './cards/OpenArticlesCards.vue';


export default {
    emits: ['openArticlePopup'],
    components: {
        OpenArticlesCards,
    },
    methods: {
        openArticlePopup(e) {
            this.$emit('openArticlePopup',e)
        },
        navigateInto() {
            this.$router.push({name: 'Searching', query: {oac: true}});
        }
    }
}
</script>

<style scoped>
    section {
        width: 100%;
        background: #B67E86;
        padding-bottom: 40px;
    }
    div.arrowclear {
        width: 100%;
    }
    div.title{
        margin-top: 10px;
        width: 100%;
        text-align: center;
    }
    div.title h1 {
        color: white;
    }
    div.arrow-down {
        margin-left: auto;
        margin-right: auto;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 35px solid white;
    }
    div.maincards {
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 15px;
    }
    div.link {
        margin-top: 2rem;
        width: 100%;
        text-align: right;

    }
    div.link a {
        text-decoration: underline;
        color: white;
        transition: 0.2s;
        font-size: 16px;
        cursor: pointer;
    }
    div.link a:hover {
        color: lightgrey;
    }
</style>