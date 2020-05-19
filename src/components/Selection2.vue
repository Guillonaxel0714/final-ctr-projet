<template>
    <section>
        <v-layout>
            <div class="team">
                <div class="teamB">
                    <h2 class="title-team">TEAM B</h2>
                    <img src="../assets/traceRouge.png">
                </div>
                <form class="form" action="" method="get">
                    <button class="btn-goSelect2" @click="joinRoomB()">Rejoindre</button>
                </form>
            </div>
        </v-layout>
    </section>
</template>

<script>
    import io from 'socket.io-client';
export default {
    name: 'Selection2',
    data() {
        return {
            socket : io('localhost:3001')
        }
    },
    methods: {
        joinRoomB(){
            this.socket.emit('TeamB',this.$route.params.id);
            this.$router.push('/'+this.$route.params.id+'/TeamB');
        },
    },
};
</script>


<style>


    .team{
        margin: 0 auto;
        position: relative;
        margin-top: 20%;
        height: 600px;
        width: 425px;
        justify-content: center;
        background-color: rgb(255, 255, 255);
        border: solid #00BAFE 8px;
        border-radius: 10%;
    }

    .btn-goSelect2{
        background-color: red;
        border-radius: 50px;
        color: white;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
        margin-top: 115%;
        margin-left: 25%;
        padding: 10px 20px;
    }

    .teamB{
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
        margin-left: 20%;
        position: absolute;
        top: 20%;
        transform: skew(0deg);
    }

@media screen and (min-width: 200px) and (max-width: 320px){
    .form{
        height: 100%;
    }
    .btn-goSelect2{
    margin-top: 500px;
    margin-left: 20%;
    font-size: 30px;
    padding: 10px;
    }
}
</style>