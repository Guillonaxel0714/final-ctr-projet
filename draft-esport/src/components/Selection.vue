<template>
    <v-section>
        <v-layout>
            <div class="team">
                 <div class="teamA">
                    <h2 class="title-team">TEAM A</h2>
                    <img src="../assets/traceJaune.png">
                </div>
                   <form action="" method="get">
                    <input class="btn-goSelect" type="submit" value="Rejoindre">
                </form>
            </div>
        </v-layout>
    </v-section>
</template>

<script>
export default {
    name: 'Selection',
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