<template>    
    <section>
        <div class="arrow-down"></div>
        <div class="wrapper">
            <div class="articletitle">
                <h1>Walking the line: balancing performance barriers and facilitators in an augmented reality mobile application for paediatric code cart training</h1>
                <h2>
                    <span v-for="author in authors" :key="author.id" @click="searchAuthor(author)">
                        {{author.firstName}} {{author.lastName}}
                    </span>
                </h2>
                <h3>
                    <span v-for="keyword in keywords" :key="keyword.id" @click="searchKeyword(keyword)">
                        {{keyword.keyword}}
                    </span>
                </h3>
                <nav>
                    <ul>
                        <li class="active">Abstract</li>
                        <li>Full text</li>
                        <li>Get access</li>
                    </ul>
                </nav>
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
export default {
    data() {
        return {
            authors: [
                {
                    id: 1,
                    firstName: 'Abigail R.',
                    lastName: 'Wooldridge'
                },
                {
                    id: 2,
                    firstName: 'Widya A.',
                    lastName: 'Ramadhani'
                },
                {
                    id: 3,
                    firstName: 'Keith',
                    lastName: 'Hanson'
                },
                {
                    id: 4,
                    firstName: 'Elsa',
                    lastName: 'Vazquez-Melendez'
                },
                {
                    id: 5,
                    firstName: 'Gréta',
                    lastName: 'Tardos'
                }
            ],
            keywords: [
                {
                    id: 1,
                    keyword: 'Augmented reality',
                },
                {
                    id: 2,
                    keyword: 'paediatric resuscitation'
                },
                {
                    id: 3,
                    keyword: 'code carts'
                },
                {
                    id: 4,
                    keyword: 'sociotechnical system design'
                },
                {
                    id: 5,
                    keyword: 'work system analysis'
                }
            ]
        };
    },
    methods: {
        searchAuthor(authors) {
            const authorName = authors.firstName+" "+authors.lastName;
            this.$router.push({name: 'Searching', query: {author: authorName}});
        },
        searchKeyword(keyword) {
            this.$router.push({
                name: 'Searching',
                query: {keywords: keyword.keyword}
            });

        }
    }
}
</script>

<style scoped>
    section {
        width: 100%;
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
        color: #7F444D;
    }

    .articletitle h3 {
        color: white;
        font-size: 14px;
    }

    .articletitle h3 span {
        display: inline-block;
        cursor: pointer;
        padding: 5px;
        background-color: #783741;
        border-radius: 8px;
        transition: 0.2s;
        margin-right: 15px;
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
        background-color: #783741;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 5%;
        padding-left: 5%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 1.2em;
        transition: 0.3s;
    }
    ul li:hover {
        background-color: #9b6c73;
    }
    ul li.active {
        background-color: white;
        color: #783741;
    }
</style>