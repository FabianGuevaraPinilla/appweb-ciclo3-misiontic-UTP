<template>
  <div class="container-fluid">
    <div class="banner--about">
      <h1>
        Con puntos <br />
        <strong>siempre puedes tener más</strong>
      </h1>
    </div>

    <div class="container-section1">
      <h1>¿QUE ES MUEVE POR PUNTOS?</h1>
      <p>
        Mueve por puntos es un ecosistema con variedad de eventos en los que acumulas en
        una única cuenta puntos por participación, los mismos podran ser redimidos en
        diversos premios.
      </p>

      <hr />

      <h1>¿COMO ACUMULAS PUNTOS EN MUEVE POR PUNTOS?</h1>
      <p>
        Una ves se encuentre activo mediante una cuenta en Mueve por Puntos, estarás listo
        para comenzar a acumular puntos. Para ganarlos, debes inscribirte a algunos de
        nuestros eventos y listo.
      </p>

      <div class="body--grid">
        <div class="masEventos">
          <img src="../assets/images/about_img/mall_icon.svg" alt="" />
          <p>
            Conoce los eventos <br />
            <strong> para ganar puntos </strong>
          </p>
        </div>

        <div class="masPremios">
          <img src="../assets/images/about_img/gift_icon.svg" alt="" />
          <p>
            Conoce los premios <br />
            <strong> redime tus puntos </strong>
          </p>
        </div>
      </div>
    </div>

    <!-- TEAM -->
    <div class="page-section bg-light" id="team">
      <div class="container">
        <div class="text-center py-5">
          <h2 class="section-heading text-uppercase" id="text-team-header">Nuestro equipo</h2>
          <h3 class="section-subheading text-muted" id="text-team">Conoce a las personas que con esfuerzo y dedicación llevaron a cabo este increible proyecto.</h3>
        </div>
        
        <!-- <div class="row container-team">
          <div class="col-lg-4" v-for="(item, index) of team" :key="index">
            <TeamCard :miembro="item"></TeamCard>
          </div>
        </div> -->

      </div>
    </div>


    <div class="container-contactenos">
      <div class="row">
        <div class="col">
          <div class="body">
            <img src="../assets/images/about_img/send_icon.svg" alt="icon" />
            <h1>Contactenos</h1>
            <p>
              Descubre porque somos tu mejor opcion, contactanos y te guiaremos en el
              proceso con cualquier duda e inquietud.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="formulario">
            <div class="row">
              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="mx-4">Nombre</label>
                </div>
              </div>

              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="mx-4">Apellido</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="mx-4"> Correo electronico</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2" class="mx-4"> Mensaje</label>
              </div>
            </div>

            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TeamCard from '../components/TeamCard.vue'

export default {
  name: "About",
  components: {
    TeamCard
  },

  data(){
    return {
      team: [
        {
          codigo: 1,
          nombre: "Laura Motta",
          rol: "Scrum Master",
          imagen: "/images/team/user.png",
          linkedin: "#"
        },
        {
          codigo: 2,
          nombre: "Javier Morales",
          rol: "Product Owner",
          imagen: "/images/team/user.png",
          linkedin: "#"
        },
        {
          codigo: 3,
          nombre: "Fabian Guevara",
          rol: "Desarrollador backend",
          imagen: "/images/team/fabian.png",
          linkedin: "#"
        },
        {
          codigo: 4,
          nombre: "Cristian Curiel",
          rol: "Desarrollador frontend",
          imagen: "/images/team/user.png",
          linkedin: "#"
        },
      ],
    };
  },

};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap");
#text-team-header{
    font-family: "Allerta", normal;
    font-size: 30px;
    color: #ff5a60;
}

#text-team{
  font-size: 24px;
}

.container-team{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.container-fluid {
  background: #f2f2f2;
}

.banner--about {
  background: url("../assets/images/about_img/Banner.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  min-width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: flex-end;
  justify-content: center;
  text-align: left;
  color: #fff;

  h1 {
    position: relative;
    left: -100px;
    font-size: 46px;
  }
}

.container-section1 {
  background: #fff;
  margin: 20px auto;
  height: 600px;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  h1 {
    font-family: "Allerta", normal;
    font-size: 30px;
    color: #ff5a60;
  }

  p {
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 20px;

    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
  }

  hr {
    width: 80%;
    position: relative;
    left: 170px;
    border: 1px solid #ff5a6083;
  }

  .body--grid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0px 200px;
    padding-top: 20px;

    .masEventos {
      grid-area: 1 / 1 / 2 / 2;
      background: #ff5a6015;
      border-radius: 20px;
      padding-top: 30px;

      img {
        width: 80px;
        height: 80px;
      }
    }
    .masPremios {
      grid-area: 1 / 2 / 2 / 3;
      background: #ff5a6015;
      border-radius: 20px;
      padding-top: 30px;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}

.container-contactenos {
  height: 360px;
  background: #f2f2f2;
  padding-top: 20px;

  .row .col .body {
    width: 500px;
    display: inline-block;
    padding-top: 20px;
    p {
      text-align: justify;
      padding-left: 40px;
      padding-right: 40px;
      font-size: 22px;
    }

    img {
      animation: ilustrationAnimate ease-in 1s infinite alternate;

      @keyframes ilustrationAnimate {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.1);
        }
      }
    }
  }

  .row .col .formulario {
    padding-left: 20px;
    padding-right: 20px;

    .row > .form-floating > input,
    textarea {
      border-radius: 5px;
    }

    .row .col .form-floating > input {
      border-radius: 5px;
    }

    button {
      width: 90%;
      border-radius: 5px;
      color: #fff;
      border: none;
      background: #43bdd4;
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      margin-top: 12px;
    }

    button:hover {
      background: #318a9c;
    }
  }
}
</style>