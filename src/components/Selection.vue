<template>
    <section>
        <v-layout>
            <div class="team">
                 <div class="teamA">
                    <h2 class="title-team">TEAM A</h2>
                    <img src="../assets/traceJaune.png">
                </div>
                <form class="forms" action="" method="get">
                    <button class="btn-goSelect" @click="_joinRoomA()" >Rejoindre</button>
                </form>
            </div>
        </v-layout>
    </section>
</template>

<script>

export default {
    name: 'Selection',
   props:{
        socket:{
            type:Object,
        },
   },
    methods: {
        _joinRoomA(){
            this.socket.emit('TeamA',{id: this.$route.params.id});
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
        border: solid #00BAFE 8px;
        border-radius: 10%;
        }


    .btn-goSelect{
        background-color: red;
        border-radius: 50px;
        color: white;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
        margin-top: 115%;
        margin-left: 25%;
        padding: 10px 20px;
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

@media screen and (min-width: 200px) and (max-width: 320px){
    .forms{
        height: 100%;
    }
    .btn-goSelect{
    margin-top: 500px;
    margin-left: 20%;
    font-size: 30px;
    padding: 10px;
    }
}

</style>