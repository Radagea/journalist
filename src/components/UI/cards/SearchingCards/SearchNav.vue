<template>
  <nav>
          <form @submit.prevent="advSearching">
            <div class="form-control">
              <label for="mainsearch">Search:</label>
              <input id="mainsearch" name="mainsearch" type="text" placeholder="Title,Abstract etc..." v-model="mainSearch"> 
            </div>
            <div class="form-control">
              <label for="keywordsearch">Search in keywords:</label>
              <input id="keywordsearch" name="keywordsearch" type="text" placeholder="Anastomosis" v-model="keywordsSearch"> 
            </div>
            <div class="form-control">
              <label for="authorsearch">Search in authors:</label>
              <input id="authorsearch" name="authorsearch" type="text" placeholder="John Doe" v-model="authorSearch"> 
            </div>
            <div class="form-control">
              <label for="identifier">Identifier:</label>
              <input id="identifier" name="identifier" type="text" placeholder="ID or etc..." v-model="identifierSearch"> 
            </div>
            <div class="form-control">
              <label for="yearfrom">Year:</label>
              <input id="yearfrom" name="yearfrom" type="number" min="1900" max="2022" placeholder="From" v-model="yearFrom"><p>-</p>
              <input id="yearto" name="yearto" type="number" min="1900" max="2022" placeholder="To" v-model="yearTo"> 
            </div>
            <div class="form-control">
                <label for="openaccess">Open Access:</label>
                <input id="openaccess" name="openaccess" type="checkbox" v-model="onlyOpenaccess">
            </div>
            <div class="form-control">
              <drop-down :name="cat" class="dropdown" @selected-id="makeSelection"></drop-down>
            </div>
            <div class="form-control">
              <drop-down :name="cat2" class="dropdown" @selected-id="makeSelection2"></drop-down>
            </div>
            <div class="form-control">
                <button @click="StartSearching">Search</button>
            </div>
          </form>
        </nav>
</template>

<script>
import dropDown from '../../elements/dropDown.vue';
export default {
    components: {
        dropDown,
    },
    methods: {
        makeSelection(emit) {
            this.catSelectedId = emit;
        },
        makeSelection2(emit) {
            this.cat2SelectedId = emit;
        },
        StartSearching() {
            this.$router.push({name: 'Searching', 
                            query: {main: this.mainSearch, author: this.authorSearch,
                            keywords: this.keywordsSearch, cat: this.catSelectedId, 
                            cat2: this.cat2SelectedId, identifier: this.identifierSearch,
                            yearFrom: this.yearFrom, yearTo: this.yearTo, oac: this.onlyOpenaccess}});
        }
    },
    data() {
        return {
            cat: 'Categories',
            cat2: 'Article Type',
            catSelectedId: null,
            cat2SelectedId: null,
            mainSearch: null,
            authorSearch: null,
            keywordsSearch: null,
            yearFrom: null,
            yearTo: null,
            identifierSearch: null,
            onlyOpenaccess: false,
        };
    }
}
</script>

<style scoped>

    nav {
        float: left;
        width: 20%;
    }
    .dropdown {
        width: 100%;
    }
    .form-control {
        width: 90%;
        margin: 1rem auto;
    }
    .form-control label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }
    .form-control input {
        display: block;
        max-width: 100%;
        width: 100%;
        height: 2rem;
        font: inherit;
        border: 1px solid #ccc;
    }
    .form-control p {
        text-align: center;
    }
    button {
        padding: 0.75rem 1.5rem;
        width: 100%;
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

    @media(max-width:1100px) {
        nav {
            width: 30%;
        }
    }

    @media(max-width:850px) {
        nav {
            width: 100%;
            float: none;
        }
    }
</style>