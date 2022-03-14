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
  data() {
    return {
      searchFor: this.$route.query.main,
      searchResults: [{
        id: 1,
        title: 'Cerebellar and Striatal Implications in Autism Spectrum Disorders: From Clinical Observations to Animal Models',
        authors: ['Mathieu Thabault','Valentine Turpin','Alexandre Maisterrena','Mohamed Jaber','Matthieu Egloff','Laurie Galvan'],
        views: 422,
        published: '27.04.2021'
      },
      {
        id: 2,
        title: 'Pulmonary oedema after percutaneous ASD-closure',
        authors: ['Dries Viaene','Paul Vermeersch',' Frank Van Den Branden'],
        views: 132,
        published: '23.05.2021'
      },
      {
        id: 3,
        title: 'Having a Sibling with ASD: Perspectives of Siblings and Their Parents',
        authors: ['Monica L. Molinaro ','Lauren E. Rollo',' Paula C. Fletcher','Margaret A. Schneider'],
        views: 12,
        published: '21.12.2018'
      },
      {
        id: 4,
        title: 'Pulmonary oedema after percutaneous ASD-closure',
        authors: ['Dries Viaene ','Paul Vermeersch',' Frank Van Den Branden'],
        views: 1222,
        published: '23.05.2021'
      },
      {
        id: 5,
        title: 'Pulmonary oedema after percutaneous ASD-closure',
        authors: ['Dries Viaene ','Paul Vermeersch',' Frank Van Den Branden'],
        views: 1,
        published: '23.05.2021'
      },
      {
        id: 6,
        title: 'Walking the line: balancing performance barriers and facilitators in an augmented reality mobile application for paediatric code cart training',
        authors: ['Abigail R. Wooldridge ',' Widya A. Ramadhani','  Keith Hanson', ' Elsa Vazquez-Melendez'],
        views: 1,
        published: '23.05.2021'
      }
      ]
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