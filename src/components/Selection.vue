<template>
    <v-section>
        <v-layout>
            <div class="team">
                 <div class="teamA">
                    <h2 class="title-team">TEAM A</h2>
                    <img src="../assets/traceJaune.png">
                </div>
                   <form action="" method="get">
                       <button class="btn-goSelect" @click="_joinRoomA()" >Rejoindre</button>
                </form>
            </div>
        </v-layout>
    </v-section>
</template>

<script>
    import io from 'socket.io-client';
export default {
    name: 'Selection',
    data() {
        return {
            socket : io('localhost:3001')
        }
    },
    methods: {
        _joinRoomA(){
            this.socket.emit('TeamA',this.$route.params.id);
            this.$router.push('/'+this.$route.params.id+'/TeamA');
        },
    },
    mounted() {

    }
};

</script>


<style>


.team{
    margin: 0 auto;
    position: relative;
    margin-top: 20%;
    height: 600px;
    width: 425px;
    background-color: rgba(255, 255, 255, 0.281) !important;
    border: solid #5A6897 2px;
    border-radius: 10%;
    }


    .btn-goSelect{
        background-color: red;
        border-radius: 50px;
        color: white;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
    }

    .teamA{
        position: absolute;
        top: -13%;
    }

    img{
        max-width: 100%;
    }

    .title-team{
        z-index: 1;
        font-family: 'Showcard Gothic', sans-serif;
        color: white;
    }



    @media screen and (min-width: 200px) and (max-width: 640px) {

        .team{
            border: solid #00BAFE 10px;
            justify-content: center;
            z-index: 1;
        }

        .btn-goSelect{
            padding: 15px 18px;
            font-size: 30px !important;
            margin-left: 75px !important;
            margin-top: 460px !important;
            width: 60%;
            height: 70px;
        }
      }

</style>