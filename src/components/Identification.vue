<template>
    <div class="login">
        <div class="ruban">
            <h2 class="title-id">Identification</h2>
            <img src="../assets/ruban.png">
        </div>
        <form action="" method="get" class="form">
            <input v-model="name" class="formulaire" type="text" placeholder="Nom d'équipe">
            <p>{{msg}}</p>
            <button class="btn-go" @click="goname()">GO !</button>
        </form>
    </div>    
</template>

<script>
    import io from 'socket.io-client';

    export default {
        name: 'Identification',
        data() {
            return {
                name:'',
                msg:'',
                socket : io('localhost:3001'),
            }
        },
        methods:{
            goname(){
                if(this.name==''){
                    this.msg ="veullez donnez votre nom d'équipe"
                }else {
                    this.socket.emit('name',{name: this.name});
                    this.$router.push('/Create-Join');
                }
            }
        }
    };

</script>

<style>


    .login{
        margin: 0 auto;
        position: relative;
        margin-top: 20%;
        height: 450px;
        width: 425px;
        justify-content: center;
        background-color: #403BCB;
        border: solid #00BAFE 7px;
        -webkit-transform: skew(15deg);
        -moz-transform: skew(15deg);
        transform: skew(15deg); 
    }

    .form{
        transform: skew(-15deg);
    }
    
    .formulaire{
        background-color: #00DCFF;
        color: white;
        text-align: center;
        border-radius: 25px;
        display: block;
        margin-left: 10%;
        margin-top: 25%;
        padding: 10px 20px;
        font-size: 22px;
    }
    
    .btn-go{
        background-color: red;
        border-radius: 50px;
        color: white;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
        margin-top: 20%;
        margin-left: 40%;
        padding: 10px 20px;
    }

    .ruban{
        position: absolute;
        top: -13%;
        transform: skew(-15deg);
    }

    img{
        max-width: 100%;
        
    }
    
    .title-id{
        z-index: 1;
        font-family: 'Showcard Gothic', sans-serif;
        color: white;
        margin-left: 20%;
        position: absolute;
        top: 20%;
        transform: skew(0deg);
    }


    @media screen and (min-width: 200px) and (max-width: 320px){
        .login{
            transform: skew(0deg);
            border: solid #00BAFE 10px;
            justify-content: center;
            z-index: 1;
            margin: 0 auto;
            margin-top: 30%;
            width: 300px;
            height: 400px;
        }
        .form{
            transform: skew(0deg);  
            
        }
        .formulaire{
            margin: 0 auto;
            margin-top: 40%;
            padding: 15px 18px;
            font-size: 16px;
        }
        .btn-go{
            margin-left: 33%;
        }
        .ruban{
            transform: skew(0deg);
            top: -10%;
        } 
        .title-id{
            z-index: 1;
            font-size: 22px;
        }
    }


    @media (min-width: 321px) and (max-width: 767px) {
        .login{
            transform: skew(0deg);
            border: solid #00BAFE 10px;
            justify-content: center;
            z-index: 1;
            margin: 0 auto;
            margin-top: 20%;
            width: 400px;
        }

        .form{
            transform: skew(0deg);    
        }
        
        .formulaire{
            margin: 0 auto;
            margin-top: 30%;
            padding: 15px 18px;
            font-size: 24px;
        }
        .btn-go{
            padding: 10px 13px;
            font-size: 50px;
            margin-left: 35%;
        }
        .ruban{
            transform: skew(0deg);
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        .login{
            transform: skew(0deg);
            border: solid #00BAFE 10px;
            justify-content: center;
            z-index: 1;
            margin: 0 auto;
            margin-top: 20%;
            height:500px;
        }
        .ruban{
            transform: skew(0deg);
        }
        .form{
            transform: skew(0deg);
        }
        .formulaire{
            margin-left: 10%;
            margin-top: 30%;
            padding: 15px 18px;
            font-size: 24px;
        }
        .btn-go{
            padding: 10px 13px;
            font-size: 50px;
            margin-left: 33.5%;
        }
      }
      @media (min-width: 1024px) and (max-width: 1280px) {
        .login{
            border: solid #00BAFE 7px;
            justify-content: center;
            z-index: 1;
            margin: 0 auto;
            margin-top: 25%;
            height:400px;
            width: 375px;
        }
        .formulaire{
            margin-left: 10%;
            margin-top: 30%;
            padding: 15px 18px;
            font-size: 18px;
        }
        .title-id{
            font-size: 28px;
        }
      }

</style>