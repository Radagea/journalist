<template>
    <section class="fo">
        <div class="wrapper clear">
            <!-- <a @click="goto('add')">KLIKK ME</a> -->
            <div class="foo" v-html="fulltext.content">
            </div>
            <div class="menu">
                <a v-for="section in fulltext.sections" :key="section.id" @click="goto(section.id)">{{ section.name }}</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    created() {
        fetch(this.$linkToAPI+'articles/getFulltextHTML.php').then((response) => {
            if(response.ok) {
                return response.json();
            }
        }).then((data) => {
            this.fulltext = {
                id: data.id,
                content: data.content,
                sections: data.sections
            };
        });
    },
    data() {
        return {
            fulltext: {},
        };
    },
    methods: {
        goto(refName){
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
}
</script>

<style scoped>
    section.fo {
        width: 100%;
        background-color: white;
    }
    .wrapper {
        width: 90%;
        max-width: 1400px;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        margin-right: auto;
        margin-left: auto;
    }
    .foo {
        width: 80%;
        float: left;
    }
    .menu {
        width: 18%;
        float: right;
        position: sticky;
        top: 20px;
        text-align: center;
        background-color: #D8E8E8;
        border-radius: 2px;
    }
    .menu a {
        display: block;
        padding-top: 10px;
        padding-bottom: 5px;
        text-decoration: none;
        font-size: 1.2em;
        color: #115349;
        transition: 0.2s;
        cursor: pointer;
    }
    .menu a:hover,
    .menu a.active {
        color: white;
        background-color: #5C948C;
    }



    .foo /deep/ {
        text-align: justify
    }
    .foo /deep/ h1 {
        font-size: 2em;
        margin-bottom: 15px;
        margin-top: 15px;
        padding-top: 20px;
        border-top: 1px solid lightgray;
    }
    .foo /deep/ h1:first-child {
        border-top: 0;
    }
    .foo /deep/ h2 {
        font-size: 1.5em;
        margin-bottom: 8px;
    }
    .foo /deep/ p {
        font-size: 1.3em;
        line-height: 1.5em;
        margin-bottom: 20px;
    }
</style>