<template>
  <teleport to="body">
    <div class="homaly" @click="$emit('close')" v-if="open"></div>
    <transition name="popup">
      <dialog open v-if="open">
        <header>
          <div class="title">
            <h2>{{ article.title }}</h2>
          </div>
          <div class="closebutt">
            <h2 @click="$emit('close')">X</h2>
          </div>
        </header>
        <section>
          <article-authors :authors="article.authors" @close="$emit('close')"></article-authors>
          <the-abstract :abstract="article.abstract" :keywords="article.keywords" :views="article.views" @close="$emit('close')" :articleIDs="articleID"></the-abstract>
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
  data() {
    return {
      article: {
        id: this.articleID,
        title: "Esophageal anastomosis",
        authors: ["Y Yuan","K-N Wang","L-Q Chen"],
        abstract: `This review gives an overview of the esophageal anastomosis. The history, various techniques and substitution organs, their advantages and disadvantages, healing mechanism, complications, and actual trend of this essential part of esophageal surgery are described. The history of the esophageal anastomosis extending from the first anastomosis in 1901 to today has undergone more than one century. In the early days, the success rate of the anastomosis was extremely low. As the technology progressed, the anastomosis got significant achievement. Various anastomotic techniques are currently being used. However, controversies exist on the choice of anastomotic method concerning the success rate, postoperative complication and quality of life. How to choose the method, no one can give the best answer. We searched the manuscripts about the esophageal anastomoses in recent years and studied the controversy questions about the anastomosis. Performing an esophageal anastomosis is a technical matter, and suture healing is independent of the patient's biologic situation. Every anastomosis technique has its own merit, but the outcomes were different if it was performed by different surgeons, and we also found that the complication rate of the anastomosis was mainly associated with the surgeons. So the surgeons should learn from their previous experience and others to avoid technical errors.`,
        keywords: [
          "anastomosis",
          "esophageal replacement",
          "esophageal substitution",
          "esophagectomy",
        ],
        views: 4,
      },
    };
  },
  emits: ["close"],
  props: ["open", "articleID"]
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
.closebutt {
  display: inline-block;
  text-align: right;
}
.closebutt {
  float: right;
}
.closebutt h2 {
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  font-size: 26px;
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