<template>
  <div :class="[anypopup ? 'blur' : '']" class="simplify">
    <login-page :open="isLoginPopup" @close="LoginClose"></login-page>
    <register-page :open="isRegisterPopup" @close="RegisterClose"></register-page>
    <the-article-popup :open="isArticlePopup" @close="ArticlesPopupClose" :articleData="articlePopupID"></the-article-popup>
    <header>
      <main-header @login="LoginOpen" @register="RegisterOpen"></main-header>
    </header>
    <router-view @openArticlesPopup="ArticlesPopupOpen"></router-view>
    <!-- <the-footer></the-footer> -->
  </div>
</template>


<script>
import MainHeader from './components/UI/MainHeader.vue';
import LoginPage from './components/pages/LoginPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';
import TheArticlePopup from './components/pages/TheArticlePopup.vue';
// import TheFooter from './components/UI/TheFooter.vue';


export default {
  components: {
    MainHeader,
    LoginPage,
    RegisterPage,
    TheArticlePopup
    // TheFooter
  },
  data() {
    return {
      isLoginPopup: false,
      isRegisterPopup: false,
      isArticlePopup: false,
      articlePopupID: null,
      anypopup: false,
    };
  },
  methods: {
    ArticlesPopupOpen(e) {
      this.isArticlePopup = true;
      this.articlePopupID = e;
      this.popupMode();
    },
    ArticlesPopupClose() {
      this.articlePopupID = null;
      this.isArticlePopup = false;
      this.popupMode();
    },
    LoginOpen() {
      this.isLoginPopup = true;
      this.popupMode();
    },
    LoginClose() {
      this.isLoginPopup = false;
      this.popupMode();
    },
    RegisterOpen() {
      this.isRegisterPopup = true;
      this.popupMode();
    },
    RegisterClose() {
      this.isRegisterPopup = false;
      this.popupMode();
    },
    popupMode() {
      this.anypopup = !this.anypopup;
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap');
*{
    font-family: 'Volkhov', serif;
    margin: 0;
    padding: 0;
    border: 0;
}
.clear:before,
.clear:after {
  content:" ";
    display: table
}
.clear:after { clear: both }
html {
  scroll-behavior: smooth;
}
body  {
  font-size: 14px;
}
.blur {
  -webkit-filter: blur(9px);
  -moz-filter: blur(9px);
  -o-filter: blur(9px);
  -ms-filter: blur(9px);
  filter: blur(9px);
}
.simplify {
  transition: all 0.3s;
}

.popup-enter-active {
  animation: login 0.3s ease-out;
}

.popup-leave-active {
  animation: login-out 0.3s ease-in;
}

@keyframes login {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.5);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes login-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  to {
    opacity: 0;
    transform: translateY(-50px) scale(0.5);
  }
}
</style>