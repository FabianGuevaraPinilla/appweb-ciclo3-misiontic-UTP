<template>
  <footer class="footer">
    <section class="footer__div-logo">
      <img
        class="footer__div-logo-img"
        src="@/assets/Logo_MuevetexPuntos_2.png"
        alt=""
      />
    </section>
    <section class="footer__navbar">
      <div class="footer__nabvar-links-pages">
        <nav class="list_nav_footer">
          <p><strong>Nuestras páginas</strong></p>
          <ul>
            <li>Inicio</li>
            <li>Eventos</li>
            <li>Mis puntos</li>
            <li>Premios</li>
            <li>Contactanos</li>
          </ul>
        </nav>
      </div>
      <div class="footer__nabvar-links-services">
        <nav class="list_nav_footer">
          <p><strong>El programa</strong></p>
          <ul>
            <li>Punto acumulados</li>
            <li>Redimir puntos</li>
            <li>Catalogos de premios</li>
            <li>Terminos y condiciones</li>
          </ul>
        </nav>
      </div>
      <div class="footer__boletin">
        <p><strong>Boletin de eventos</strong></p>
        <form class="form" action="">
          <label for=""></label>
          <input
            type="text"
            placeholder="Correo electronico"
            id="input_footer_email"
          />
          <input type="button" id="btnSuscribete" value="Suscribase" />
        </form>
      </div>
      <div class="footer__social-links">
        <div class="footer__social-links-contacto">
          <p>(406) 555-0120</p>
          <p style="color: #43bdd4">tim.jennings@example.com</p>
          <p>775 Rolling Green Rd.</p>
          <p>Biffco Enterprises Ltd.</p>
        </div>
        <div class="footer__social-links-networks">
          <a href="https://www.linkedin.com/"
            ><p class="mdi mdi-linkedin"></p
          ></a>
          <a href="https://www.instagram.com/"
            ><p class="mdi mdi-instagram"></p
          ></a>
          <a href="https://es-la.facebook.com/"
            ><p class="mdi mdi-facebook"></p
          ></a>
          <a href="https://twitter.com/"><p class="mdi mdi-twitter"></p></a>
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  background: $color-footer;
  font-size: 18px;
  .footer__div-logo {
    display: flex;
    justify-content: left;
    .footer__div-logo-img {
      width: 200px;
      margin: 20px;
    }
  }

  .footer__navbar {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 0.7fr 0.7fr;
    color: $color-text-footer;
    padding: 0px 20px;

    .footer__nabvar-links-pages {
      p {
        text-align: left;
      }
      ul {
        padding: 0;
      }
    }

    .footer__boletin {
      justify-content: left;
      padding: 0px 30px;
      p {
        text-align: left;
      }
    }

    .footer__nabvar-links-services {
      p {
        text-align: left;
      }
      ul {
        padding: 0;
      }
    }

    .footer__social-links {
      .footer__social-links-contacto {
        font-size: 20px;
        border-radius: 120px 0px;
        background: $color-footer-section-contacto;
        padding-right: 3rem;
        padding-block: 2rem;

        p {
          text-align: right;
          margin: 0;
        }
      }
      .footer__social-links-networks {
        margin: 0 45px;
        padding: 10px 5px;
        display: flex;
        justify-content: center;

        a {
          font-size: 2rem;
          margin: 0 10px;
        }
        p {
          color: $color-text-footer;
          text-align: center;
          padding: 0;
        }
      }
    }
  }

  li {
    list-style-type: none;
    text-align: left;
    color: #e4e4e4aa;
  }

  li:hover {
    color: white;
  }

  #input_footer_email {
    background: $color-footer;
    border: 0.5px solid #e4e4e4aa;
    outline: none;
    padding: 5px;
    align-content: left;
    color: white;
  }

  form {
    display: grid;
    grid-template-columns: 0.8fr;
    grid-gap: 10px;
  }

  #btnSuscribete {
    background: #43bdd4;
    color: rgb(214, 213, 213);
    border: none;
    border-radius: 10px;
    padding: 8px;
  }

  #btnSuscribete:hover {
    background: #0d6677;
    color: #e4e4e481;
  }
}
</style>