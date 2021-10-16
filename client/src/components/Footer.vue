<template>
  <div class="mx-0 Footer px-2">

    <section class="Footer__div-logo ms-4 pt-3 col-4 col-md-2">
      <img class="img-fluid Footer__div-logo-img" src="@/assets/logo_light.png" alt="" />
    </section>
    <footer class="pt-5">
      <div class="row w-100">
        <div class="mt-3 m-sm-0 col-12 col-sm-6 col-md-3">
          <h5>Nuestras Páginas</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/">Inicio</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/eventos">Eventos</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/my-route" class="nav-link p-0 text-muted disabled"
                >Mis Puntos</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link to="/premios">Premios</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/contactenos">Contactenos</router-link>
            </li>
          </ul>
        </div>

        <div class="mt-3 m-sm-0 col-12 col-sm-6 col-md-3">
          <h5>El Programa</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted disabled">Puntos Acumulados</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted disabled">Redimir Puntos</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted disabled"
                >Catalogos de Permisos</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted disabled">Reglamentos</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted disabled">Eventos</a>
            </li>
          </ul>
        </div>

        <div class="mt-3 px-4 col-12 col-sm-12 col-md-6">
          <form>
            <h5>Subscribete a Nuetro Boletin de Eventos</h5>
            <p>Accede a promociones y eventos solo para ti</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden"
                >Email address</label
              >
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Correo Electronico"
              />
              <button class="btn btn-primary" type="button">Subscribir</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between py-4 mt-4 border-top">
        <p>© 2021 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-light" href="#">
              <span class="mdi mdi-twitter fs-2"></span>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-light" href="#"
              ><span class="mdi mdi-facebook fs-2"></span>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-lightk" href="#"
              ><span class="mdi mdi-instagram fs-2"></span
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.Footer {
  background: $color-footer;
  color: white;
  &.Footer__div-logo {
    display: flex;
    justify-content: left;
    &.Footer__div-logo-img {
      width: -webkit-fill-available;
      margin: 20px;
    }
  }
  li {
    font-family: "Mallanna", sans-serif;
    //font-size: 1.4rem;
    a {
      text-decoration: none;
      color: white;
      &.router-link-exact-active {
        color: white;
      }
      &.disable {
        color: gray;
        font-weight: normal;
      }

    }
  }
}
</style>
