<template>
    <main>
        <div class="container">
            <div class="searches">
                <input class="mainsearch" type="text" id="mainsearch" name="mainsearch" placeholder="Start Searching..." v-model="mainSearch">
                <input class="authorsearch" type="text" id="authorsearch" name="authorsearch" placeholder="Author, Authors.." v-model="authorSearch">
                <drop-down :name="cat" class="dropdownmain" :drpdButtons="categoriesDrpdButtons" @selected-id="makeSelection"></drop-down>
                <input class="keywordsearch" type="text" id="keywordsearch" name="keywordsearch" placeholder="Keywords..." v-model="keywordsSearch">
                <drop-down :name="cat2" class="dropdownmain" :drpdButtons="typesDrpdButtons"  @selected-id="makeSelection2" ></drop-down>
            </div>
            <div class="buttondiv">
                <button @click="StartSearching">Search</button>
                <a @click="StartSearching">Advenced search</a>
            </div>
        </div>
        <div class="mobilecont">
            <div class="msearches">
                <input class="mmainsearch" type="text" name="mainsearch" placeholder="Start Searching...">
                <input class="mauthorsearch" type="text" name="authorsearch" placeholder="Author, Authors..">
                <drop-down :name="cat" class="mdropdown" :drpdButtons="categoriesDrpdButtons" @selected-id="makeSelection"></drop-down>
                <input class="mkeywordsearch" type="text" name="keywordsearch" placeholder="Keywords...">
                <drop-down :name="cat2" class="mdropdown" :drpdButtons="typesDrpdButtons" @selected-id="makeSelection2"></drop-down>
            </div>
            <div class="mbuttondiv">
                <button @click="StartSearching">Search</button>
                <a @click="StartSearching">Advenced search</a>
            </div>
        </div>
    </main>
</template>


<script>
import dropDown from  './elements/dropDown.vue';
export default {
    components: {
        dropDown,
    },
    methods: {
        StartSearching() {
            this.$router.push({name: 'Searching', 
                            query: {main: this.mainSearch, author: this.authorSearch,
                            keywords: this.keywordsSearch, cat: this.catSelectedId, 
                            cat2: this.cat2SelectedId}});
        },
        makeSelection(emit) {
            this.catSelectedId = emit;
        },
        makeSelection2(emit) {
            this.cat2SelectedId = emit;
        }
    },
    data() {
        return {
            cat: 'Categories',
            cat2: 'Types',
            catSelectedId: null,
            cat2SelectedId: null,
            mainSearch: null,
            authorSearch: null,
            keywordsSearch: null,
            categoriesDrpdButtons: [
                {
                    id: 1,
                    name: 'First Category'
                }, 
                {
                    id: 2,
                    name: 'Second Category'
                },
                {
                    id: 3,
                    name: 'Lorem Ipsum'
                },
                {
                    id: 4,
                    name: 'Dolor Sit Amet'
                },
                {
                    id: 4,
                    name: 'Sit Amet'
                }
            ],
            typesDrpdButtons: [
                {
                    id: 1,
                    name: 'FirstTypes'
                },
                {
                    id: 2,
                    name: 'SecondTypes'
                }
            ]
        };
    }
}
</script>

<style scoped>
    div.mobilecont {
        display: none;
    } 
    main {
        display: flex;
        width: 100%;
        min-height: 30rem;
        background: url('articles.png'), #FEEEEE;
        background-repeat: no-repeat;
        background-size: auto 120%;
        background-position: 95% 130%;
    }
    div.container {
        float: left;
        margin-top: 10rem;
        margin-right: auto;
        margin-left: 20%;
        margin-bottom: auto;
        width: 50%;
    }
    div.mobilecont {
        margin-top: 10rem;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: auto;
        width: 50%;
    }
    div.searches {
        float: left;
        width: 90%;
    }
    div.msearches {
        width: 100%;
    }
    div.buttondiv {
        float: left;
        margin-left: 2%;
        width: 8%;
        height: 3rem;
    }
    div.mbuttondiv {
        margin-top: 1rem;
        width: 100%;
        height: 3rem;
        margin-bottom: 5rem;
    }
    div.buttondiv button {
        width: 100%;
        height: 100%;
        background-color: #783741 ;
        cursor: pointer;
        color: white;
        transition: 0.4s;
    }
    div.mbuttondiv button {
        width: 100%;
        height: 100%;
        background-color: #783741 ;
        cursor: pointer;
        color: white;
        transition: 0.4s;
    }
    div.buttondiv button:hover,
    div.mbuttondiv button:hover {
        background-color: #B67E86;
    }
    div.container input.mainsearch {
        width: 99%;
        height: 3rem;
        padding-left: 1%;
    }
    div.mobilecont input {
        margin-top: 1rem;
        width: 100%;
        height: 3rem;
        padding-left: 1%;
    }
    input.authorsearch {
        margin-top: 10px;
        width: 21%;
        padding-left: 1%;
        height: 3rem;
    }
    input.keywordsearch {
        margin-top: 10px;
        width: 21%;
        height: 3rem;
        margin-left: 4%;
        padding-left: 1%;
    }
    input:focus {
        outline: 3px solid #ddd;
    }
    .dropdownmain {
        margin-left: 4%;
    }
    .mdropdown {
        width: 100%;
    }
    a {
        margin-top: 12px;
        display: block;
        cursor: pointer;
        transition: 0.4s;
        color: #783741;
        text-align: center; 
        text-shadow: 1px 1px #ddd;
    }
    a:hover {
        color: #B67E86;
        text-shadow: 1px 1px #783741;
    }
    @media(max-width:1100px) {
        div.container {
            display: none;
        }
        div.mobilecont {
            display: block;
        }
    }
</style>