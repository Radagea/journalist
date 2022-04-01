<template>
  <section class="main">
      <div class="wrapper">
          <div class="searchField">
              <input type="text" placeholder="You can search here..." v-model="searching">
          </div>
          <div class="wrap">
              <ul class="letters">
                  <li v-for="jBl in journalsByLetters" :key="jBl.letter">
                        <h1>{{ jBl.letter }}</h1>
                        <ul class="journalList">
                            <li v-for="journal in jBl.journals" :key="journal.id">
                                <div class="img">
                                    <img :src="imageThos">
                                </div>
                                <div class="journalCardContent">
                                    <h2>{{ journal.name }}</h2>
                                    <p>{{ journal.shortDesc }}</p>
                                </div>
                                <div style="clear:both;"></div> 
                            </li>
                        </ul>
                  </li>
              </ul>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    created() {
        var journals;
        fetch(this.$linkToAPI+'journals/read.php').then((response) =>{
                if(response.ok) {
                    return response.json();
                }
            }).then((data) => {
                const results = [];
                for(const id in data) {
                    results.push({
                        id: data[id].id,
                        name: data[id].name,
                        shortDesc: data[id].shortDesc
                    })
                }
                journals = results;
                const letterResult = [];
                for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
                    const helper = {
                        letter: "",
                        journals: []
                    };
                    helper.letter = String.fromCharCode([i]);
                    const filteredJournals = journals.filter(function (el) {
                        return el.name.charAt(0) == helper.letter;
                    });
                    helper.journals = filteredJournals;
                    letterResult.push(helper);
                }
                this.journalsByLetters = this.letterHaveJournal(letterResult);
                this.journalsByLettersFilter = this.letterHaveJournal(letterResult);
            });
    },
    data() {
        return {
            journalsByLetters: [],
            journalsByLettersFilter: [],
            imageThos: 'images/nophoto.jpg',
            searching: '',
        };
    },
    methods: {
        letterHaveJournal(letterResult) {
            const filteredLetter = [];
            for (const el of letterResult) {
                if (el.journals.length > 0) {
                    filteredLetter.push(el);
                }
            }
            return filteredLetter;
        }
    },
    watch: {
        searching() {
            const lowerCase = this.searching.toLowerCase();
            const newArr = this.journalsByLettersFilter.map(createNew);

            function createNew(createNew) {
                const newJournals = {
                    letter: createNew.letter,
                    journals: createNew.journals.filter((obj) => obj.name.toLowerCase().includes(lowerCase))
                }
                return newJournals;
            }
            this.journalsByLetters = this.letterHaveJournal(newArr);
        },
    }
}
</script>

<style scoped>
    section.main {
        width: 100%;
        background: white;
    }
    div.wrapper {
        width: 90%;
        max-width: 1200px;
        margin: 5rem auto 3rem auto;
    }
    .searchField {
        width: 100%;
        margin-bottom: 1rem;
    }
    .searchField input {
        width: calc(100% - 2px);
        padding-bottom: 1rem;
        padding-top: 1rem;
        border: 2px solid #b67e86;
        border-radius: 4px;
    }
    
    .searchField input:focus {
        outline: none !important;
        border: 2px solid #783741;
    }
    .wrap {
        background-color: #feeeee;
        border-radius: 5px;
        padding: 1rem;
    }
    ul.letters {
        list-style: none;
    }
    ul.letters li h1 {
        color: #783741;
        font-size: 2em;
        border-bottom: 1px solid #B47D85;
        padding-left: 20px;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    ul.journalList {
        list-style: none;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
    ul.journalList li {
        display: block;
        margin-bottom: 20px;
        margin-top: 20px;
        color: #783741;
        background-color: white;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 2%;
        padding-right: 2%;
        border-radius: 20px;
        cursor: default;
    }
    div.img {
        width: 8%;
        float: left;
        margin-right: 2%;
    }
    div.img img {
        width: 100%;
    }
    div.journalCardContent {
        width: 90%;
        float: left;
    }

    @media(max-width:830px) {
        div.img {
            width: 0%;
            display: none;
        }
        div.journalCardContent {
            width: 100%;
        }
    }


    div.journalCardContent h2 {
        margin-bottom: 10px;
        transition: 0.3s;
        cursor: pointer;
    }
    div.journalCardContent h2:hover {
        color: #b47d85;
    }
</style>