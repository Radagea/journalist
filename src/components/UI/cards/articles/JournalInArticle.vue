<template>
    <header>
        <div class="wrapper">
            <div class="journal">
                <img src="/images/nophoto.jpg" alt="Journal main Picture">
                <h1>{{ journal }}</h1>
                <p>Articles number: 231</p>
                <a :href="'/journals/2'">Journal page</a>
            </div>
            <div class="searcher">
                <div class="wrap">
                    <input class="mainsearch" type="text" name="mainsearch" placeholder="Start Searching..." v-model="mainSearch">
                    <button class="searchButton" @click="StartSearching">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['journal','journalid'],
    data() {
        return {
            mainSearch: '',
        };
    },
    methods: {
        StartSearching() {
            this.$router.push({
                name: 'Searching',
                query: {main: this.mainSearch}
            });
        },
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 10rem;
        background-color: #783741;
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
        background-color: #b1626d;
        color: white;
        bottom: 0;
        border-radius: 10px;
        transition: 0.2s;
    }
    .journal a:hover {
        background-color: #96646b;
    }

    .searcher {
        position: relative;
        float: left;
        width: 60%;
        height: 100%;
    }
    .wrap {
        margin-top: 3rem;
    }
    input.mainsearch {
        float: left;
        width: 88%;
        height: 3rem;
        padding-left: 1%;
        margin-right: 1%;
        transition: 0.2s;
    }
    button {
        color: white;
        cursor: pointer;
        width: 10%;
        height: 3rem;
        background-color: #b1626d;
        border-radius: 10px;
        transition: 0.2s;
    }
    button:hover {
        background-color: #96646b;
    }
    input:focus,
    input:hover {
        outline: 3px solid #ddd;
    }
    @media(max-width:790px) {
        .searcher {
            width: 50%;
        }
        h1 {
            font-size: 1.4em;
        }
        input.mainsearch {
            width: 78%;
        }
        button {
            width: 20%;
        }
        .journal {
            width: 50%;
        }
    }
    @media(max-width: 580px) {
        .searcher {
            width: 40%;
        }
        .journal {
            width: 60%;
        }
    }
    @media(max-width: 500px) {
        .searcher {
            width: 0%;
            display: none;
        }
        .journal {
            width: 100%;
        }
    }
</style>