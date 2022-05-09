<template>    
    <section>
        <div class="arrow-down"></div>
        <div class="wrapper">
            <div class="articletitle">
                <h1>{{ articleData.title }}</h1>
                <h2>
                    <span v-for="author in articleData.authors" :key="author.id" @click="searchAuthor(author)">
                        {{author.firstname}} {{author.lastname}}
                    </span>
                </h2>
                <h3>
                    <span v-for="keyword in articleData.keywords" :key="keyword.id" @click="searchKeyword(keyword)">
                        {{keyword.keyword}}
                    </span>
                </h3>
                <nav>
                    <ul>
                        <li :class="activeMenu == 1 ? 'active' : '' " @click="emitMenuData(1)">Abstract</li>
                        <li :class="activeMenu == 2 ? 'active' : '' " @click="emitMenuData(2)">Full text</li>
                        <li :class="activeMenu == 3 ? 'active' : '' " @click="emitMenuData(3)">Get access</li>
                        <li :class="activeMenu == 4 ? 'active' : '' " @click="emitMenuData(4)">References</li>
                    </ul>
                </nav>
            </div>
            <div class="articledatas">
                <h1>{{articleData.views}}</h1>
                <p>Views</p>
                <h1>{{ articleData.publishedtime }}</h1>
                <p>Published date</p>
                <h1>2019.11.01</h1>
                <p>Recived date</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['articleData'],
    data(){
        return {
            activeMenu: 1,
        };
    },
    methods: {
        searchAuthor(authors) {
            const authorName = authors.firstName+" "+authors.lastName;
            this.$router.push({name: 'Searching',
            query: {author: authorName}});
        },
        searchKeyword(keyword) {
            this.$router.push({
                name: 'Searching',
                query: {keywords: keyword.keyword}
            });

        },
        emitMenuData(menuID) {
            this.activeMenu = menuID;
            this.$emit('menuID',menuID);
        }
    },
    emits: ["menuID"]
}
</script>

<style scoped>
    section {
        width: 100%;
        overflow: hidden;
        background-color: #5C948C;
    }
    div.arrow-down {
        margin-left: 30%;
        margin-right: auto;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #115349;
    }
    .wrapper {
        margin-left: auto;
        margin-right: auto;
        margin-top: 35px;
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
        margin-bottom: 40px;
    }
    .articletitle h2 span {
        cursor: pointer;
        transition: 0.2s;
        margin-right: 15px;
    }
    .articletitle h2 span:hover {
        color: #40605d;
    }

    .articletitle h3 {
        color: white;
        font-size: 14px;
    }

    .articletitle h3 span {
        display: inline-block;
        cursor: pointer;
        padding: 5px;
        background-color: #115349;
        border-radius: 8px;
        transition: 0.2s;
        margin-right: 15px;
    }

    @media (max-width:1200px) {
        .articletitle h3 span {
            margin-bottom: 5px;
        }
    }
    .articletitle h3 span:hover {
        color: #e0e0e0;
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
        padding-bottom: 15px;
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
    nav {
        margin-top: 60px;
    }
    ul {
        margin: 0 auto;
        text-align: center;
        list-style: none;
    }
    ul li {
        display: inline-block;
        cursor: pointer;
        background-color: #115349;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 5%;
        padding-left: 5%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 1.2em;
        transition: 0.3s;
    }
    ul li+li {
        margin-left: 5px;
    }
    ul li:hover {
        background-color: #146356;
    }
    ul li.active {
        background-color: white;
        color: #115349;
    }
</style>