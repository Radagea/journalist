<template>
  <section class="fo">
        <div class="wrapper">
            <div class="main">
                <p>{{ abstract }}</p>
            </div>
            <div class="right">
                <ul>
                    <h1>Similar articles:</h1>
                    <li>
                        <h2 @click="goToArticle(1)">Pulmonary oedema after percutaneous ASD-closure</h2>
                    </li>
                    <li>
                        <h2 @click="goToArticle(2)">Functioning and participation of young adults with ASD in higher education according to the ICF framework</h2>
                    </li>
                    <li>
                        <h2 @click="goToArticle(3)">Functioning and participation of young adults with ASD in higher education according to the ICF framework</h2>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ["abstract"]
}
</script>

<style scoped>
    section.fo {
        width: 100%;
        background-color: white;
        overflow: hidden;
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
    .right h1 {
        font-size: 1.5em;
        margin-bottom: 25px;
        color: white;
    }
    .right h2 {
        font-size: 1.2em;
    }
    .right ul {
        list-style: none;
        background-color: #5C948C;
        padding: 10px;
        border-radius: 15px;
    }
    .right ul li {
        display: block;
        padding: 10px;
        margin-bottom: 1.8rem;
        background-color: #D8E8E8;
        color: #115349;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
    }
    .right ul li:last-child {
        margin-bottom: 0;
    }
    .right ul li:hover {
        color: white;
        background-color: #115349;
    }

    @media(max-width:1300px) {
        .main {
            font-size: 1.3em;
        }
        .right h1 {
            font-size: 1.3em;
        }
        .right h2 {
            font-size: 1em;
        }
    }

    @media(max-width:900px) {
        .main {
            width: 100%;
        }
        .right {
            width: 0%;
            display: none;
        }
    }
</style>