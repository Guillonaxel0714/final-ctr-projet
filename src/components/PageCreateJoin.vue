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
              <ButtonCreateJoin/>
            </div>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <div class="droite">
              <div class="logo">
                <img src="../assets/ctr-logo.png" alt="logo crash team racing">
              </div>
              <div class="kart">
                </div>
                <img src="../assets/kart.png" alt="image kart">
              </div>
          </v-flex>
        </v-layout>
      </div>
    </body>
</template>

<script>

import Langues from './Langues';
import ButtonCreateJoin from './ButtonCreateJoin';

export default {
  name: 'CommentCaMarche',

  components: {
    Langues,
    ButtonCreateJoin,
  },

  data: () => ({

  }),
};


</script>

<style>


</style>
