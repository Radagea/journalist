<template>
  <h3>Abstract:</h3>
  <div class="container">
    <div class="abstract">
        <p>
            {{ abstract }}
        </p>
        <div class="keywords">
            <h4>Keywords: </h4>
            <ul>
                <li v-for="keyword in keywords" :key="keyword" @click="searchKeyword(keyword.keyword)">{{ keyword.keyword }}</li>
            </ul>
        </div>
        <div class="button">
            <button @click="navigateInto(articleid)">Article page</button>
        </div>
    </div>
    <div class="sidemenu">
        <div>
            <h3>Views:</h3>
            <p>{{ views }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["abstract","keywords","views","articleid"],
    emits: ["close"],
    methods: {
        navigateInto(id) {
            this.$emit('close');
            this.$router.push({name: 'ArticlePage', params: {id: id} });
        },
        searchKeyword(keyword) {
            this.$emit('close');
            this.$router.push({
                name: 'Searching',
                query: {
                    keywords: keyword
                }
            })
        }
    }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    h3 {
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .sidemenu h3 {
        font-size: 20px;
        margin-top: 0;
    }
    .sidemenu p {
        font-size: 18px;
        text-align: center;
    }
    .keywords {
        margin-top: 24px;
    }
    h4 {
        display: inline;
    }
    ul {
        list-style: none;
        display: inline;
    }
    li {
        display: inline;
        cursor: pointer;
        color: #783741;
        transition: 0.2s;
    }
    li:hover {
        color: #B67E86;
    }
    li+li {
        margin-left: 10px;
    }
    .container {
        display: grid;
        grid-template-columns: auto auto;
    }
    .abstract {
        padding-right: 40px;
    }    
    .abstract p {
        font-family: 'Volkhov', serif;
        font-size: 15px;
    }

    @media(max-width:600px) {
        .sidemenu {
            display: none;
        }
    }

    .sidemenu {
        text-align: right;
        padding-left: 10px;
        height: 100%;
        border-left: 1px solid lightgray;
    }
    .sidemenu div{
        margin-top: 150%;
    }
    .button {
        float: right;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .button button {
        padding: 0.75rem 1.5rem;
        font-family: inherit;
        background-color: #783741;
        border: 1px solid #783741;
        color: white;
        cursor: pointer;
        transition: 0.2s;
        border-radius: 30px;
    }
    button:hover,
    button:active {
    background-color: #B67E86;
    border-color: #B67E86;
    }
</style>