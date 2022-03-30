<template>
  <section class="main">
      <div class="wrapper">
          <div class="searchField">
              <input type="text" placeholder="You can search here..." v-model="searching">
          </div>
          <div class="wrap">
              <ul class="letters">
                  <li v-for="letter in letters" :key="letter">
                        <h1>{{ letter }}</h1>
                        <ul class="journalList">
                            <li v-for="journal in journalsByLetter(letter)" :key="journal.id">
                                <div class="img">
                                    <img :src="imageThos">
                                </div>
                                <div class="journalCardContent">
                                    <h2>{{ journal.name }}</h2>
                                    <p>{{ journal.shortDisc }}</p>
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
        const result = [];
        for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
            result.push(String.fromCharCode([i]));
        }
        this.letters = result;
    },
    data() {
        return {
            letters: [],
            imageThos: 'images/nophoto.jpg',
            searching: '',
            journals: [
                {
                    id: 1,
                    letter: 'A',
                    name: 'A Journal',
                    shortDisc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 2,
                    letter: 'A',
                    name: 'A test journal',
                    shortDisc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 3,
                    letter: 'S',
                    name: 'Sustainability',
                    shortDisc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 4,
                    letter: 'E',
                    name: 'Electronics',
                    shortDisc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        };
    },
    computed: {
        journalsByLetter(letter) {
            const filteredJournals;
            console.log(filteredJournals);
            return filteredJournals;
        }
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


    div.journalCardContent h2 {
        margin-bottom: 10px;
        transition: 0.3s;
        cursor: pointer;
    }
    div.journalCardContent h2:hover {
        color: #b47d85;
    }
</style>