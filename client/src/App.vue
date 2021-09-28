<template>
  <div id="app">
    <ModalLogin
      :showModal="isOpenModalLogin"
      
      @closeLogin="closeModalLogin"
      @openRegister="toggleToRegister"
    ></ModalLogin>
    <ModalRegister
      :showModal="isOpenModalRegister"
      @closeRegister="closeModalRegister"
    ></ModalRegister>
    <Header
    @showLogin = "showModalLogin"
    @showRegister = "showModalRegister"
    ></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ModalLogin from "./components/ModalLogin.vue";
import ModalRegister from "./components/ModalRegister.vue";
export default {
  data() {
    return {
      isOpenModalLogin: false,
      isOpenModalRegister: false,
    };
  },
    methods: {
    toggleToRegister() {
      this.isOpenModalLogin = false;
      this.isOpenModalRegister = true;
    },
    showModalLogin() {
      this.isOpenModalLogin = true;
      this.isOpenModalRegister = false;
    },
    closeModalLogin() {
      this.isOpenModalLogin = false;
    },
    showModalRegister(){
      this.isOpenModalLogin = false;
      this.isOpenModalRegister = true;
    },
    closeModalRegister(){
      this.isOpenModalRegister = false;
    }
  },

  components: { Header, Footer, ModalLogin, ModalRegister },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
