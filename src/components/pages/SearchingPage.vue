<template>
  <section>
    <div class="container">
      <div class="searchinfo">
        <h1>Search results for: <span>{{ searchFor }}</span></h1>
      </div>
      <div class="main">
        <search-nav></search-nav>
        <div class="searchresults">
          <div class="column">
            <result-card v-for="result in searchResults" :key="result.id" :result="result"></result-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchNav from '../UI/cards/SearchingCards/SearchNav.vue';
import ResultCard from '../UI/cards/SearchingCards/ResultCard.vue';

export default {
  components: {
    SearchNav,
    ResultCard
  },
  created() {
    fetch(this.$linkToAPI+'articles/read.php').then((response) => {
      if(response.ok) {
        return response.json();
      }
    }).then((data) => {
      const results = [];
      for (const id in data) {
        results.push({
          id: data[id].id,
          title: data[id].title,
          authors: data[id].authors,
          views: data[id].views,
          published: data[id].publishedtime,
          type: data[id].type,
          oa: data[id].oa
        })
      }
      this.searchResults = results;
    });
  },
  data() {
    return {
      searchFor: this.$route.query.main,
      searchResults: [],
    };
  }
}
</script>

<style scoped>
  section {
    width: 100%;
  }
  .container {
    width: 90%;
    max-width: 1300px;
    margin: 15px auto;
  }
  .searchinfo {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: right;
  }
  .searchinfo h1 {
    font-size: 22px;
    font-weight: 200;
  }
  .searchinfo h1 span {
    font-weight: 600;
    color: #7F444D;
  }
  .main {
    display: flex;
    margin-top: 20px;
  }
  .searchresults {
    width: 80%;
    background-color: #feeeee;
    border-radius: 4px;
  }
  .column {
    width: 95%;
    padding-bottom: 20px;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
  }

  @media(max-width:1100px) {
    .searchresults {
      width: 70%;
    }
    
  }
  @media(max-width:850px) {
    .main {
      display: block;
    }
    .searchresults {
      width: 100%;
      float: none;
    }
  }
</style>