<template>
  <ul>
    <li v-for="author in authors" :key="author" @click="searchAuthor(author)" >{{ author.firstname }} {{ author.lastname }}</li>
  </ul>
</template>

<script>
export default {
    props: ["authors"],
    emits: ["close"],
    methods: {
      searchAuthor(author) {
        this.$emit('close');
        this.$router.push({name: 'Searching', query: {author: author.firstname+' '+author.lastname}});
      }
    }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  color: blue;
  cursor: pointer;
  display: inline;
  transition: 0.2s;
}
li:hover {
  color: #fce0e0;
}
li + li {
  margin-left: 15px;
}
</style>