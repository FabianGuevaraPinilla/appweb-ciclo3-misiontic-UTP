<template>
  <header class="header navbar">
    <div class="header__navbar-brand navbar-brand">
      <router-link to="/">
        <img
          class="header__navbar-brand-image"
          src="@/assets/logo.png"
          alt=""
        />
      </router-link>
    </div>
    <div class="header__navbar_nav" v-show="!collapseHeader">
      <nav class="container-fluid">
        <ul class="navbar-nav header__navbar_links">
          <li class="nav-item">
            <router-link class="nav-item" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-item" to="/eventos">Eventos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-item" to="/premios">Premios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-item" to="/about">Contactenos</router-link>
          </li>
          <li class="nav-item" v-show="loginHasAdmin">
            <router-link class="nav-item" to="/admin">Dashboard</router-link>
          </li>
          <li v-show="loginHasUser">
            <router-link to="/puntos">Mis puntos</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__section-login" v-show="!collapseHeader">
      <div
        class="section-login_not-login d-flex"
        v-if="isLogin === false ? true : false"
      >
        <button class="header__btn-login" @click="$emit('showLogin')">
          Ingresar
        </button>
        <button class="header__btn-register" @click="$emit('showRegister')">
          Registrate
        </button>
      </div>
      <div
        class="section-login-logout d-flex"
        v-if="isLogin === true ? true : false"
      >
        <p
        >
          <span v-if="loginHasUser" class="mdi mdi-account"></span>
          <span v-if="loginHasAdmin" class="mdi mdi-key"></span>
          {{ userInfo ? userInfo.username : "" }}
        </p>

        <button class="header__btn-logout" @click="doLogout">
          Salir <span class="mdi mdi-logout"></span>
        </button>
      </div>
    </div>
    <div class="header__btn-collapse">
      <button class="btn_collapse" @click="collapseNav"><span class="mdi mdi-menu mdi-18px"></span></button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      collapseHeader: false,
    };
  },
  props: ["isLogin", "userInfo"],
  methods: {
    doLogout() {
      console.log("saliendo");
      this.$store.commit("setUser", undefined);
      localStorage.removeItem("token");
      localStorage.removeItem("auth");

      //return to home
      //redirigir al home
      if (this.$route.name != "/") {
        this.$router.push("/").catch(() => {});
      }
      this.$emit("hasLogout");
    },
    collapseNav(){
      this.collapseHeader = !this.collapseHeader;
    }
  },
  computed: {
    ...mapState(["userdata"]),
    loginHasAdmin() {
      if (this.isLogin) {
        return this.userInfo.rol === "ADMIN" ? true : false;
      } else {
        return false;
      }
    },
    loginHasUser() {
      if (this.isLogin) {
        return this.userInfo.rol === "USER" ? true : false;
      } else {
        return false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
$breackpoint: 576px;
.btn_collapse{
  border: none;
  background-color: transparent;
}
.header {
  display: grid;

  grid-template-columns: 0.25fr 1fr 0.4fr;

  box-shadow: 0rem 0.5rem 1rem $color-header-shadow;

  ul {
    list-style: none;
  }
  li {
    font-family: "Mallanna", sans-serif;
    //font-size: 1.4rem;
    a {
      text-decoration: none;
      color: $color-text-header;
      &.router-link-exact-active {
        color: $color-link-active;
      }
      &.disable {
        color: gray;
        font-weight: normal;
      }
    }
  }

    background: white;
    padding: 5px 50px;
    grid-template-areas: "logo navegacion login";

  @media (max-width: $breackpoint) {
    padding: 2px 10px;
    grid-template-areas: "logo btnCollapse" "login login" "navegacion navegacion";
    grid-template-columns: 1fr 1fr;
  }

  .header__navbar-brand {
    grid-area: logo;
    display: inline-flex;
    justify-content: left;
      @media (max-width: $breackpoint) {
  justify-content: center;
      }

.header__navbar-brand-image {
      width: 120px;
      @media (max-width: $breackpoint) {
  justify-content: center;
  width: 80px;
      }
    }
  }
  .header__navbar_nav {
    grid-area: navegacion;
    display: flex;
    justify-content: right;
    .header__navbar_links {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;
      flex-direction: row;
      @media (max-width: $breackpoint) {
        flex-direction: column;
      }
      li {
        margin-inline: 5%;
      }
    }
  }
  .header__section-login {
    grid-area: login;
    display: flex;
    align-items: baseline;
    flex-direction: row;
    justify-content: space-around;
    button {
      padding: 0 5%;
      margin: 0 10px;
      border-radius: 50rem;
      font-family: "Mallanna", sans-serif;
    }
    .header__btn-login,
    .header__btn-logout {
      border: 2px $color-salmon solid;
      background: $color-salmon;
      color: white;
      width: 5rem;
    }
    .header__btn-register {
      border: 2px $color-salmon solid;
      background: white;
      color: $color-text-header;
    }
  }
  .header__btn-collapse {
    grid-area: btnCollapse;
    @media (min-width: $breackpoint) {
      display: none;
    }
  }
}
</style>
