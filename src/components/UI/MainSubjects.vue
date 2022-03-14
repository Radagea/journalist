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
                <button>More...</button>
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
    data() {
        return {
            categories: [{
                id: 1,
                name: "Biology & Life Sciences"
            },
            {
                id: 2,
                name: "Business & Economics"
            },
            {
                id: 3,
                name: "Chemistry & Materials Science"
            },
            {
                id: 4,
                name: "Computer Science & Mathematics"
            },
            {
                id: 5,
                name: "Engineering"
            },
            {
                id: 6,
                name: "Environmental & Earth Sciences"
            },
            {
                id: 7,
                name: "Medicine & Pharmacology"
            },
            {
                id: 8,
                name: "Physical Sciences"
            },
            {
                id: 9,
                name: "Public Health & Healthcare"
            },
            {
                id: 10,
                name: "Social Sciences, Arts and Humanities"
            },
            {
                id: 11,
                name: "Agriculture and Rural Development"
            }
            ]
        };
    }
}
</script>

<style scoped>
    main {
        width: 100%;
        background: white;
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
        border-top: 35px solid #FEEEEE;
    }
    div.subjects {
        margin: 10px auto;
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
        background: rgb(255, 255, 255);
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
        color: #783741;
        cursor: pointer;
    }
    ul li a:hover {
        color: #B67E86;
    }

    .listwrapper button {
        color: white;
        height: 40px;
        width: 70px;
        background-color: #783741;
        cursor: pointer;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .listwrapper button:hover {
        background-color: #A6737A;
    }
</style>