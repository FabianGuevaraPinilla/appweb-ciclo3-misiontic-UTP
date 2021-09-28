<template>
          <div class="slide-container">
              <div class="wrapper">
                  <div class="clash-card barbarian">
                    <div class="clash-card__image clash-card__image--barbarian">
                      <img :src="require('@/assets/'+ imagen)" alt="barbarian" />
                    </div>
                    <div class="clash-card__unit-name">{{nombre}}</div>
                    <div class="clash-card__unit-description">
                        {{descripcion}}
                      </div>

                    <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                        <div class="stat">Puntos</div>
                        <div class="stat-value">{{puntos}}</div>
                    </div>

                  </div> <!-- end clash-card barbarian-->
                </div> 
                <!-- end wrapper -->
    </div> <!-- end container -->
</template>

<script>
export default{
  props:[
    'nombre', 'descripcion', 'puntos', 'imagen'
  ],

  data(){
    return{
      
    }
  },
  mounted() {
    console.log(this.imagen)
  },
}
</script>


<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Assistant&display=swap');
    //Card View
    $border-radius-size: 14px;
    .wrapper {
      padding-top: 40px;
      padding-bottom: 40px;
      
      &:focus {
        outline: 0;
      }
    }
    .clash-card {
      background: white;
      width: 252px;
      height: 380px;
      display: inline-block;
      margin: auto;
      border-radius: $border-radius-size + 5;
      position: relative;
      text-align: center;
      box-shadow: -1px 15px 30px -12px black;
      transition: 0.5s;
      
    }
    .clash-card:hover{
      width: 294px;
      height: 420px;
      margin: auto;
      box-shadow: -1px 15px 30px -12px black;
      z-index: 20;
      top: -20px;
      transition: 0.5s;
          .clash-card__image--barbarian {
            background-size: cover;
            img {
              left:60px;
              top:-10px;
            }
          }
          .clash-card__unit-stats--barbarian {
            background-size: cover;
            position: relative;
            bottom: -144px;
          }
    }
    .clash-card__image {
      position: relative;
      height: 150px;
      widows: 250px;
      border-top-left-radius: $border-radius-size;
      border-top-right-radius: $border-radius-size;
    }
    .clash-card__image--barbarian {
      background: url(../assets/Rec.png);
      background-size: cover;
      img {
        position: absolute;
        width: 180px;
        height: 180px;
        align-content: center;
        left:40px;
        top:-10px;
      }
    }
    .clash-card__unit-name {
      font-size: 20px;
      color: black;
      font-weight: 900;
      margin-bottom: 5px;
      margin-top: 15px;
      font-family: 'Allerta', sans-serif;
    }
    .clash-card__unit-description {
      padding: 10px 20px 10px 20px;
      font-size: 14px;
      font-family: 'Assistant', sans-serif;
    }
    .clash-card__unit-stats--barbarian {
      background: url(../assets/Rec.png);
      height: 10%;
      background-size: cover;
      position: relative;
      bottom: -102px;
      transition: 0.5s;
      height: 15% ;
    }
    .clash-card__unit-stats {
      
      color: white;
      font-weight: 700;
      border-bottom-left-radius: $border-radius-size;
      border-bottom-right-radius: $border-radius-size;
      
      .one-third {
        width: 33%;
        float: left;
        padding: 10px;
      }
      
      .stat {
        position: relative;
        font-size: 14px;
        font-family: 'Allerta', sans-serif;
        
      }
      
      .stat-value {
        font-weight: 400;
        font-size: 28px;
        font-family: 'Baloo Tamma 2', cursive;
      }
    }
    //Responsive mediaQuery
    @media only screen and (min-width: 1600px) {
      .clash-card {
        background: white;
        width: 80%;
        height: 400px;
        display: inline-flex;
        flex-direction: column;
        position: relative;
        text-align: center;
        overflow: auto;
      }
      .clash-card__unit-stats {
      display: flex;
      align-content: flex-start;
      justify-content: center;
      align-items: center;
      .stat {
        position: flex;
        text-align: center;
        font-size: 20px;
      }
        .stat-value {
          font-size: 20px;
 
        }
    }
     .clash-card__unit-stats--barbarian {
       position: relative;
       top: 33px; 
       
     }
    .clash-card__unit-description {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 10px;
      height: 20%;
      font-size: 20px;
    }
    .clash-card__unit-name {
      font-size: 24px;
      margin-bottom: 5px;
      margin-top: 15px;
    }
    .clash-card:hover{
      margin: 5px;
      z-index: 90;
      top: -20px;
      transition: 0.5s;
          .clash-card__image--barbarian {
            background-size: cover;
            img {
              left:60px;
              top:-10px;
            }
          }
          .clash-card__unit-stats--barbarian {
            background-size: cover;
            position: relative;
            top: 45px;

          }
    }
    .clash-card__image--barbarian {
      img {
        position: absolute;
        left:60px;
        top:-10px;
      }
    }
    } //Fin del mediaQuery
    //Final Card View
</style>