<template>
    <header class="journalTitle">
        <div class="wrapper">
            <div class="journal">
                <img :src="journalData.imgURL" alt="Journal main Picture">
                <h1>{{ journalData.title }}</h1>
                <div class="journalInfo">
                    <p><span>Start date:</span> {{ journalData.startDate }}</p>
                    <p><span>Last article:</span> {{ journalData.lastArticle }}</p>
                    <p><span>Language:</span> {{ journalData.language }}</p>
                    <p><span>Published article:</span> {{ journalData.articleNumber }}</p>
                </div>
                <a :href="'#'">Submit manuscript</a>
            </div>
            <div class="searcher">
                <h2>Start date:</h2>
                <p>{{ journalData.startDate }}</p>
                <h2 class="second">Last article:</h2>
                <p>{{ journalData.lastArticle }}</p>
            </div>
            <div class="searcher">
                <h2>Language:</h2>
                <p>{{ journalData.language }}</p>
                <h2 class="second">Published article</h2>
                <p>{{ journalData.articleNumber }}</p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['journalData'],
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 10rem;
        background-color: #115349;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .wrapper {
        width: 90%;
        max-width: 1400px;
        height: 100%;
        margin: 0 auto;
    }
    .journal {
        float: left;
        height: 100%;
        width: 40%;
        position: relative;
    }
    .journal img {
        float: left;
        height: 100%;
        margin-right: 10px;
    }
    .journal h1 {
        color: white;
        font-size: 1.5em;
    }
    .journal p {
        color: white;
    }
    .journal a {
        position: absolute;
        text-decoration: none;
        padding: 10px;
        background-color: #37867c;
        color: white;
        bottom: 0;
        border-radius: 10px;
        transition: 0.2s;
    }
    .journal a:hover {
        background-color: #4a7a73;
    }

    .journalInfo {
        display: none;
    }
    .journalInfo p{
        line-height: 1.5;
    }

    .journalInfo span {
        font-weight: 800;
    }

    .searcher {
        float: left;
        width: 30%;
        height: 100%;
        color: white;
    }
    h2 {
        margin-top: 15px;
    }

    @media(max-width:790px) {
        h1 {
            font-size: 1.4em;
        }
        .journal {
            width: 100%;
        }
        .journalInfo {
            display: block;
        }
        .searcher {
            display: none;
        }
    }
    @media(max-width: 580px) {
        .journal {
            width: 60%;
        }
    }
    @media(max-width: 500px) {
        .journal {
            width: 100%;
        }
    }
</style>