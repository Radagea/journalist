<template>
  <section>
    <div class="container">
      <div class="searchinfo">
        <h1>Search results for: <span>{{ this.$route.query.main }}</span></h1>
      </div>
      <div class="main">
        <search-nav></search-nav>
        <div class="searchresults">
          <div class="column">
            <the-loader v-if="isLoading"></the-loader>
            <result-card v-else v-for="result in searchResults" :key="result.id" :result="result" class="anim"></result-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchNav from '../UI/cards/SearchingCards/SearchNav.vue';
import ResultCard from '../UI/cards/SearchingCards/ResultCard.vue';
import TheLoader from '../UI/elements/TheLoader.vue';

export default {
  components: {
    SearchNav,
    ResultCard,
    TheLoader,
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
          publishedtime: data[id].publishedtime,
          type: data[id].type,
          oa: data[id].oa
        })
      }
      this.searchResults = results;
      this.isLoading = false;
    });
  },
  data() {
    return {
      searchResults: [],
      isLoading: true
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
    color: #40605d;
  }
  .main {
    display: flex;
    margin-top: 20px;
  }
  .searchresults {
    width: 80%;
    background-color: #D8E8E8;
    border-radius: 4px;
  }
  .column {
    width: 95%;
    padding-bottom: 20px;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
  }

  .anim {
    -webkit-animation: slit-in-vertical 1s ease-out both;
    animation: slit-in-vertical 1s ease-out both;
  }

  @-webkit-keyframes slit-in-vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
              transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    10% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
              transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
              transform: translateZ(0) rotateY(0);
    }
  }
  @keyframes slit-in-vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
              transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    10% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
              transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
              transform: translateZ(0) rotateY(0);
    }
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