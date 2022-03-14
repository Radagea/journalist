<template>
  <div class="container">
    <div class="carousel">
      <div class="carousel-icon" style="background-image: url('/images/virus.png')"></div>
      <div class="carousel-main">
        <div class="carousel-content">
          <div class="carousel-content-title">
            <slot name="header">
            </slot>
          </div>
          <div class="carousel-content-abstract">
            <slot name="paragraph">
            </slot>
          </div>
        </div>
        <div class="carousel-button">
          <button @click="navigateInto(articleID)">Read more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["articleID"],
  methods: {
    navigateInto(ids) {
      this.$router.push({name: 'ArticlePage', params: {id: ids}});
    }
  }
};
</script>

<style scoped>
    .carousel {
        display: inline-block;
        width: 90%;
        height: 25rem;
        background-color: #FEEEEE;
        border-radius: 30px;
    }
    .carousel-icon {
        float: left;
        /* background: url('/images/virus.png'); */
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
        height: 100%;
        width: 20%;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        background-color: #B67E86;
    }
    .carousel-main {
        float: left;
        width: 80%;
        height: 100%;
    }
    .carousel-content {
        width: 100%;
        height: 85%;
    }
    .carousel-content-title{
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
    }
    .carousel-content-abstract {
        padding-left: 30px;
        padding-right: 30px;
        font-size: 15px;
    }
    .carousel-button {
        width: 100%;
        height: 15%;
    }
    .carousel-button button {
        float: right;
        margin-top: 6px;
        margin-right: 15px;
        padding: 10px;
        cursor: pointer;
        color: white;
        background-color: #783741;
        border-radius: 30px;
        transition: 0.2s;
    }
    button:hover {
        background-color: #B67E86;
    }
    .arrow-right {
        display: inline-block;
        width: 5%;
        height: 25rem;
    }
    @media(max-width:900px) {
        .carousel-icon {
            width: 0%;
        }
        .carousel-main {
            width: 100%;
        }
        .carousel {
            height: auto;
        }
    }
</style>