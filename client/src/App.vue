<template>
  <div id="app">
    <ModalLogin
      :showModal="isOpenModalLogin"
      @closeLogin="closeModalLogin"
      @openRegister="toggleToRegister"
      @hasLogin="actualizarHeader"
    ></ModalLogin>
    <ModalRegister
      :showModal="isOpenModalRegister"
      @closeRegister="closeModalRegister"
    ></ModalRegister>
    <Header
      @showLogin="showModalLogin"
      @showRegister="showModalRegister"
      :isLogin="isLogin"
      :userInfo="userInfo"
      @hasLogout="hasLogout"
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
      isLogin: false,
      userInfo: undefined,
    };
  },
  mounted() {
    if (localStorage.getItem("auth") === "OK") {
      console.log("Ya se encuentra autenticado");
      this.$store.commit("setUser", {
        username: localStorage.getItem("username"),
        rol: localStorage.getItem("rol"),
        fecha_acceso: localStorage.getItem("fecha"),
        token: localStorage.getItem("token"),
      });

      this.isLogin = true;

      this.userInfo = {
        username: this.$store.state.userdata.username,
        rol: this.$store.state.userdata.rol,
      };
    }
  },
  methods: {
    actualizarHeader() {
      console.log(this.$store.state.userdata);
      if (localStorage.getItem("auth") === "OK") {
        console.log(
          "Ha ingresado el" +
            this.$store.state.userdata.rol +
            ":" +
            this.$store.state.userdata.username
        );
        this.isLogin = true;

        this.userInfo = {
          username: this.$store.state.userdata.username,
          rol: this.$store.state.userdata.rol,
        };
      }
    },
    hasLogout() {
      //resetear informacion y valor booleano de login
      this.isLogin = false;
      this.userInfo = undefined;
    },
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
    showModalRegister() {
      this.isOpenModalLogin = false;
      this.isOpenModalRegister = true;
    },
    closeModalRegister() {
      this.isOpenModalRegister = false;
    },
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
