<template>
    <journal-in-article></journal-in-article>
    <article-title></article-title>
    <main>
        <div class="wrapper">
            <div class="main">
                <p>An augmented reality (AR) mobile smartphone application was developed for clinicians to improve their knowledge about the contents and organisation of a standardised paediatric code cart, an important tool in safe, effective paediatric resuscitations. This study used focus groups and interviews with 22 clinicians to identify work system barriers and facilitators to use of the application. We identified twelve dimensions of barriers and facilitators: convenience, device ownership, device size and type, gamification, interface design, movement/physical space, perception of others, spatial presence, technological experience, technological glitches, workload, and the perception and attitude towards code cart and resuscitation. These dimensions can guide improvement efforts, e.g. redesigning the interface, providing non-AR modes, improving the tutorial. We propose nine principles to guide the design of other digital health technologies incorporating AR. In particular, the workload demands created by using AR must be considered and accounted for in the design and implementation of such technologies.</p>
                <p><span class="bold">Practitioner summary: </span>Augmented reality (AR) may prepare workers for situations that do not occur frequently. This study investigates barriers and facilitators to using an AR mobile smartphone application developed to improve clinician knowledge about code carts, leading to improvements to the application and principles to guide the design of other AR-based technologies.</p>
            </div>
            <div class="right">
                <h1>Similar articles</h1>
            </div>
        </div>
    </main>
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
    .wrapper {
        width: 90%;
        max-width: 1400px;
        margin-top: 2.5rem;
        margin-right: auto;
        margin-left: auto;
    }
    .main {
        width: 70%;
        float: left;
        font-size: 1.5em;
        font-family: "Open Sans",Sans-Serif;
        line-height: 1.8em;
        text-align: justify;
    }
    .bold {
        font-weight: 800;
    }
    .main p {
        margin-bottom: 30px;
    }

    .right {
        width: 25%;
        margin-left: 5%;
        text-align: center;
        float: left;
    }
</style>