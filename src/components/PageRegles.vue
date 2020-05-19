<template>
    <body>
      <div class="container-fluid">
        <v-layout row wrap>
          <v-flex xs12 md6 lg6>
            <div class="gauche">
              <div class="drapeaux">
                <Langues/>
              </div>
              <div class="responsive-logo">
                <img src="../assets/ctr-logo.png" alt="logo crash team racing">
              </div>
              <Rules class="rules"/>
            </div>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <div class="droite">
              <div class="logo">
                <img src="../assets/ctr-logo.png" alt="logo crash team racing">
              </div>
              <div class="kart">
                <div class="translate">
                  <Langues/>
                </div>
                <div class="btn">
                  <router-link to="/" class="link"><Button/></router-link>
                </div>
                <img src="../assets/kart.png" alt="image kart">
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </body>
</template>

<script>

import Button from './Button';
import Langues from './Langues';
import Rules from './Rules';

export default {
  name: 'CommentCaMarche',

  components: {
    Button,
    Langues,
    Rules
  },

  data: () => ({
    
  }),
};


</script>

<style>

body{
  background-image: url("../assets/bgHome.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.gauche{
  height: 100vh;
}

.droite{
  height: 100vh;
}

.responsive-logo{
  display: none;
}

.translate{
  display: none;
}

.kart img{
  width: 85%;
}

.logo{
  margin: 0 auto;
}

.kart{
  width: 90%;
  padding-top: 2%;
  position: relative;
}

.btn{
  position: absolute;
  top: 65%;
}

@media screen and (min-width: 200px) and (max-width: 320px) {

  .logo{
    display: none;
  }
  .responsive-logo{
    display: block;
    margin: 0 auto;
    margin-top: 20%;
    width: 80%;
  }
  
  .drapeaux{
    display: none;
  }

  .droite{
    height: auto;
  }

  .kart{
    margin: 0 auto;
  }

  .gauche{
    height: auto;
  }

}

@media screen and (min-width: 321px) and (max-width: 768px) {
  .logo{
    display: none;
  }
  .responsive-logo{
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 5%;
    width: 80%;
  }
  .drapeaux{
    display: none;
  }

  .droite{
    height: auto;
  }
  .kart{
    margin: 0 auto;
    width: 80%;
    margin-top: 20%;
    text-align: center;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {

  .responsive-logo{
    display: none;
  }

  .logo{
    width: 80%;
    margin-top: 10%;
  }

  .kart{
    margin: 0 auto;
  }

  .drapeaux{
    display: none;
  }
  .droite{
    height: auto;
  }
  .gauche{
    height: auto;
  }
}

</style>