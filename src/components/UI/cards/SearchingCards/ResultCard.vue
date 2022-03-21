<template>
  <div class="maincard">
    <div class="wrapper">
      <h1 @click="navigateToArticlePage(result.id)" >{{ result.title }}</h1>
      <h2>
        <span v-for="author in result.authors" :key="author.id" @click="searchAuthor(author)">{{ author.firstname }} {{ author.lastname }}</span>
      </h2>
      <div class="row">
        <div class="left">
          <h3>Published: {{ result.published }}</h3>
        </div>
        <div class="right">
          <h3>Views: {{ result.views }}</h3>
        </div>
      </div>
      <div class="readmore">
        <a @click="navigateToArticlePage(result.id)">Read more...</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  methods: {
    searchAuthor(authors) {
      const authorName = authors.firstname+" "+authors.lastname;
      this.$router.push({name: 'Searching', query: {author: authorName}});
    },
    navigateToArticlePage(ids) {
      this.$router.push({name: 'ArticlePage', params: {id: ids}});
    }
  }
}
</script>

<style scoped>
.maincard {
  margin-top: 15px;
  width: 100%;
  background: white;
  border-radius: 15px;
}
.wrapper {
  width: 95%;
  margin-right: auto;
  margin-left: auto;
}
h1 {
  color: #7F444D;
  font-size: 28px;
  cursor: pointer;
  padding-top: 15px;
  transition: 0.2s;
}
h1:hover {
  color: #B67E86;
}
h2 {
  color: #B67E86;
  font-size: 16px;
}
h2 span {
  cursor: pointer;
  transition: 0.3s;
  margin-right: 15px;
}
h2 span:hover {
  color: #7F444D;
}
h3 {
  margin-top: 10px;
  font-weight: 200;
  font-size: 16px;
  color: #666; 
}
.readmore {
  display: block;
  width: 100%;
  text-align: right;
  margin-top: 30px;
  padding-bottom: 30px;
}
.readmore a {
  cursor: pointer;
  text-decoration: underline;
  font-size: 15px;
  color: #7F444D;
  transition: 0.3s;
}
.readmore a:hover {
  color: #B67E86;
}
.row {
  display: block;
  width: 100%;
  padding-bottom: 20px;
}
.left {
  width: 50%;
  float: left;
  text-align: left;
}
.right {
  width: 50%;
  float: left;
  text-align: right;
}
</style>