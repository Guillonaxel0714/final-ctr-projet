<template>
    <body>
        <v-container-fluid>
            <div class="logoSelect">
                <img src="../assets/ctr-logo.png" alt="logo crash team racing">
            </div>
            <v-layout row wrap>
                <v-flex xs12 md5 lg5>
                    <div class="gaucheSelect">
                        <Selection/>
                    </div>
                </v-flex>

                <v-flex md2 lg2>
                    <div class="milieu">
                        <img src="../assets/vs.png" alt="logo crash team racing">
                    </div>
                </v-flex>

                <v-flex xs12 md5 lg5>
                    <div class="droiteSelect">
                        <Selection2/>
                    </div>
                </v-flex>
            </v-layout>
            <div class="btnSelect">
                <button class="spectateur" @click="joinRoomSpectator()">Spectateur</button>
            </div>
        </v-container-fluid>
    </body>
</template>

<script>

import Selection from './Selection';
import Selection2 from './Selection2';
import io from 'socket.io-client';

export default {
  name: 'PageTeam',

  components: {
    Selection,
    Selection2
  },

    data() {
        return {
            socket : io('localhost:3001')
        }
    },
    methods: {
        joinRoomSpectator(){
            this.socket.emit('TeamS',this.$route.params.id);
            this.$router.push('/'+this.$route.params.id+'/Spectator');
        }
    },
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

    .logoSelect{
        text-align: center;

    }

    .logoSelect img{
       width: 30%;
    }

    .milieu{
        width: 70%;
        margin: 0 auto;
        padding-top: 125%;
    }

    .spectateur{
        margin-left: 45%;
        border-radius: 50px;
        color: white;
        background-color: #CF6363 ;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
        padding: 5px;
    }

    @media screen and (min-width: 200px) and (max-width: 320px) {

        .milieu{
            display: none;
        }
        .spectateur{
            margin-left: 25%;
        }
        .logoSelect img{
            width: 100%;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 768px) {

        .milieu{
            display: none;
        }
        .spectateur{
            margin-left: 37%;
        }
        .logoSelect img{
            width: 70%;
            margin-top: 10%;
        }
    
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {

        .milieu{
            display: none;
        }
        .spectateur{
            margin-left: 35%;
            font-size: 40px;
        }
        .logoSelect img{
            width: 50%;
        }

    }

</style>