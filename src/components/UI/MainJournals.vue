<template>
    <section>
        <div class="arrowclear">
            <div class="arrow-down"></div>
        </div>
        <div class="main">
            <h1>Explore our Journals</h1>
            <the-loader v-if="isLoading" />
            <div v-else class="listwrapper">
                <ul>
                    <li v-for="journal in journals" :key="journal.id"><a :href="'/journals/'+journal.id">{{ journal.name }}</a></li>
                </ul>
                <button @click="goToJournalPage()">More...</button>
            </div>
        </div>
    </section>
</template>

<script>
import TheLoader from './elements/TheLoader.vue';
export default {
    components: {
        TheLoader,
    },
    created() {
        fetch(this.$linkToAPI+'journals/read.php').then((response) => {
            if(response.ok) {
                return response.json();
            }
        }).then((data) => {
            const results = [];
            for (const id in data) {
                results.push({
                    id: data[id].id,
                    name: data[id].name
                })
            }
            this.journals = results;
            this.isLoading = false;
        });
    },
    data() {
        return {
            journals: [],
            isLoading: true,
        };
    },
    methods: {
        goToJournalPage() {
            this.$router.push({name: 'Journals'})
        },
        goToJournalProfile(id) {
            this.$router.push({name: 'JournalProfile', params: {id: id}});
        }
    }
}
</script>

<style scoped>
    section {
        background-color: white;
    }
    div.arrowclear {
        width: 100%;
    }
    div.arrow-down {
        margin-left: auto;
        margin-right: auto;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 35px solid #D8E8E8;
    }
    div.main {
        margin-top: 10px;
        margin-right: auto;
        margin-left: auto;
        width: 95%;
        max-width: 1200px;
        text-align: center;
    }

    ul{
        margin-top: 18px;
        font-size: 15px;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 0 5em;
        max-width : 100%;
        z-index: 20;
        list-style: none;
        padding: 10px 12px;
    }
    @media(max-width:1100px) {
        ul {
            grid-template-columns: auto auto;
        }
    }
    ul li{
        display: inline-grid;
        text-align: left;
        width: 100%;
        padding: 10px;
        margin-bottom: 5px;
        margin-top: 5px;
        border-top: 1px lightgrey solid;
    }
    ul li a {
        text-decoration: none;
        font-size: .9em;
        font-weight: 800;
        color: #115349;
        cursor: pointer;
    }
    ul li a:hover {
        color: #5C948C;
    }

    .listwrapper button {
        color: white;
        height: 40px;
        width: 70px;
        background-color: #115349;
        cursor: pointer;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 25px;
    }

    .listwrapper button:hover {
        background-color: #52857E;
    }
</style>