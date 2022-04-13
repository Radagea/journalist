<template>
    <main>
        <div class="arrowclear">
            <div class="arrow-down"></div>
        </div>
        <div class="subjects">
            <h1>Explore our articles by categories</h1>
            <div class="listwrapper">
                <ul>
                    <li v-for="category in categories" :key="category.id"><a @click="searchforCat(category.id)">{{ category.name }}</a></li>
                </ul>
            </div>
        </div>
    </main>
    
</template>

<script>
export default {
    methods: {
        searchforCat(id) {
            this.$router.push({name: 'Searching', query: {cat: id}});
        }
    },
    created() {
        fetch(this.$linkToAPI+'categories/read.php?limit=12').then((response) => {
            if(response.ok) {
                return response.json();
            }
        }).then((data) => {
            const results = [];
            for (const id in data) {
                results.push({
                    id: data[id].id,
                    name: data[id].name,
                    articleNumber: data[id].articleNumber
                })
            }
            this.categories = results;
        });
    },
    data() {
        return {
            categories: [],
        };
    }
}
</script>

<style scoped>
    main {
        width: 100%;
        background: #D8E8E8;
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
        border-top: 35px solid #5C948C;
    }
    div.subjects {
        margin-top: 10px;
        margin-right: auto;
        margin-left: auto;
        width: 95%;
        max-width: 1200px;
        text-align: center;
        padding-bottom: 10px;
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
        margin-bottom: 20px;
    }

    .listwrapper button:hover {
        background-color: #52857E;
    }
</style>