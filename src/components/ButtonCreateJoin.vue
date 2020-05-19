<template>
    <section class="section-create-join">
        <div class="all">
            <button class="btn-create-join"  @click="_createRoom()">Créer un salon</button>
            <br>
            <div class="row" id="join">
                <div class="col-xs-12 col-md-12 col-lg-12">
                    <button class="btn-create-join" @click="_joinRoom()">Rejoindre un salon</button>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-12">
                    <input v-model="input" class="code-join" type="text" placeholder="Entrer un code">
                </div>  
                <p>{{errormes}}</p>
            </div>
        </div>
    </section>
</template>



<script>
    import io from "socket.io-client";

    export default {
  name: 'ButtonCreateJoin',
    data() {
        return {
            name:'',
            mode:'',
            errormes:'',
            id: "",
            input: "",
            socket: io("localhost:3001"),
        };
    },
    methods: {
        _joinRoom() {
            this.socket.emit("joinroom", this.input);
        },

        _createRoom() {
            var randomize = Math.floor(Math.random() * 1000 + 1);
            randomize = randomize.toString(8);
            this.socket.emit("createroom",randomize);
            this.$router.push('/'+randomize);
        },
    },
    mounted() {
        this.socket.on('room',(data)=>{
            this.$router.push('/'+data);
        }),
            this.socket.on('message',(data)=>{
                this.errormes = data.mes;
            })
    },
};


</script>


<style>

    .all{
        margin-top: 20%;
        text-align: center;
    }

    #join{
        height: 100px;
    }

    .btn-create-join{
        background-color: #F92525;
        box-shadow: 6px 6px 0 black;
        color: white;
        font-family: 'Showcard Gothic', sans-serif;
        transform: skewX(-15deg);
        padding: 20px 85px;
        margin-top: 10%;
    }

    .btn-create-join:hover{
        box-shadow: 10px 10px 0 #FCCD00;
        transition: 0.5s;
    }

    .code-join{
        margin-top: 5%;
        padding: 15px 30px;
        background-color: #FCCD00;
        color: white;
        transform: skewX(-15deg);
    }

@media screen and (min-width: 200px) and (max-width: 425px) {
    .all{   
        margin-top: 20%;
        text-align: center;
    }
    .btn-create-join{
        margin-top: 10%;
        padding: 15px 40px;
    }
    .code-join{
        margin-top: 1%;
        padding: 10px 25px;
    }
}

@media screen and (min-width: 426px) and (max-width: 768px) {

    .all{   
        margin-top: 5%;
    }

    .code-join{
        margin-top: 1%;
        padding: 15px 30px;
    }
    .btn-create-join{
        padding: 20px 100px;
    }
    .all{
        text-align: center;
    }

}

@media screen and (min-width: 769px) and (max-width: 1024px) {


}

</style>
