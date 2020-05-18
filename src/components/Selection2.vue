<template>
    <v-section>
        <v-layout>
            <div class="team">
                <div class="teamB">
                    <h2 class="title-team">TEAM B</h2>
                    <img src="../assets/traceRouge.png">
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
    name: 'Selection2',
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
        border: solid #5A6897 2px;
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