<template>
  <div class="Pagina404">
    <div class="notfound-404"></div>
    <h1>404</h1>
    <h2>¡UPS! Página no encontrada</h2>
    <p>
      Lo sentimos, pero la página que está buscando no existe, ha sido eliminada, el
      nombre a cambiado o no está disponible temporalmente.
    </p>
    <router-link to="/">Volver a la página de inicio</router-link>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.Pagina404 {
  display: flex;
  min-height: 600px;
  width: 100%;
  margin: 0px auto;
  margin-top: 40px;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;

  .notfound-404 {
    position: relative;
    background: url(/img/emoji.e7af79dc.png);
    width: 200px;
    height: 200px;
    background-size: cover;
  }

  .notfound-404::after {
    content: " ";
    position: absolute;
    left: -170px;
    top: -40px;
    width: 550px;
    height: 550px;
    background: #ff5a6010;
    z-index: -10;
    border-radius: 300px;
  }

  p {
    width: 390px;
    text-align: justify;
  }

  a {
    text-decoration: none;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #ff5a6036;
    border-radius: 40px;
    color: #030303b7;
    margin-top: 20px;
    transition: 0.3s;
  }

  a:hover {
    background: #ff5a609c;
    color: #fff;
    font-weight: 600px;
    transition: 0.3s;
  }
}
</style>
