<template>
  <teleport to="body">
    <div class="homaly" @click="$emit('close')" v-if="open"></div>
    <transition name="popup">
      <dialog open v-if="open">
        <header>
          <div class="title">
            <h2>{{ articleData.title }}</h2>
          </div>
        </header>
        <section>
          <article-authors :authors="articleData.authors" @close="$emit('close')"></article-authors>
          <the-abstract :articleid="articleData.id" :abstract="articleData.abstract" :keywords="articleData.keywords" :views="articleData.views" @close="$emit('close')"></the-abstract>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import ArticleAuthors from "../UI/cards/articles/ArticleAuthors.vue";
import TheAbstract from "../UI/cards/articles/TheAbstract.vue";

export default {
  components: {
    ArticleAuthors,
    TheAbstract,
  },
  emits: ["close"],
  props: ["open","articleData"]
};
</script>

<style scoped>
div.homaly {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
dialog {
  position: fixed;
  top: 20vh;
  width: 65%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
}
header {
  background-color: #783741;
  color: white;
  padding: 1rem;
}
.title {
  display: inline-block;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
  max-height: 30rem;
  overflow-y: scroll;
}

@media (max-width: 600px) {
  header h2 {
    font-size: 19px;
  }
}

@media (max-width: 450px) {
  dialog {
    top: 10vh;
    width: 100%;
  }
  header h2 {
    font-size: 16px;
  }
}
</style>