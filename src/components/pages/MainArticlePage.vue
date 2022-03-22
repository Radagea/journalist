<template>
    <journal-in-article></journal-in-article>
    <section>
        <div class="arrow-down"></div>
        <div class="wrapper">
            <div class="articletitle">
                <h1>Walking the line: balancing performance barriers and facilitators in an augmented reality mobile application for paediatric code cart training</h1>
                <h2>
                    <span>Abigail R. Wooldridge</span>
                    <span>Widya A. Ramadhani</span>
                    <span>Keith Hanson</span>
                    <span>Elsa Vazquez-Melendez</span>
                </h2>
            </div>
            <div class="articledatas">
                <h1>230</h1>
                <p>Views</p>
                <h1>2019.12.11</h1>
                <p>Published date</p>
                <h1>2019.11.01</h1>
                <p>Recived date</p>
            </div>
        </div>
    </section>
</template>

<script>
import JournalInArticle from '../UI/cards/articles/JournalInArticle.vue';
export default {
    components: {
        JournalInArticle,

    }
}
</script>

<style scoped>
    section {
        width: 100%;
        min-height: 20rem;
        overflow: hidden;
        background-color: #B67E86;
    }
    div.arrow-down {
        margin-left: 30%;
        margin-right: auto;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #783741;
    }
    .wrapper {
        margin: 0 auto;
        width: 90%;
        max-width: 1400px;
        color: white;
    }
    .articletitle {
        float: left;
        width: 80%;
        margin-right: 1%;
    }
    .articletitle h1 {
        font-size: 1.8em;
        margin-bottom: 10px;
    }
    .articletitle h2 {
        color: #e0e0e0;
        font-size: 16px;
    }
    .articletitle h2 span {
        cursor: pointer;
        transition: 0.2s;
        margin-right: 15px;
    }
    .articletitle h2 span:hover {
        color: #7F444D;
    }

    @media(max-width:900px) {
        .articletitle h1 {
            font-size: 1.5em;
        }
        .articletitle h2 {
            font-size: 12px;
        }
    }
    .articledatas {
        float: left;
        text-align: right;
        width: 18%;
    }
    .articledatas p {
        padding-bottom: 5px;
        border-bottom: 1px solid grey;
    }
    .articledatas h1 {
        margin-top: 20px;
    }

    @media(max-width: 500px) {
        .articledatas {
            display: none;
            width: 0%;
        }
        .articletitle {
            width: 100%;
            margin-right: 0;
        }
    }
</style>