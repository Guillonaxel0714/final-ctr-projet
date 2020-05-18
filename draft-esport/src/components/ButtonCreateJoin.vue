<template>
    <section class="section-create-join">
        <div class="create">
            <router-link to="/team" class="link"><button class="btn-create-join">Créer un salon</button></router-link>
        </div><br>
        <div class="join">
        <button class="btn-create-join">Rejoindre un salon</button>
        <input class="code-join" type="text" placeholder="Entrer un code">
        </div>
    </section>
</template>



<script>
export default {
  name: 'ButtonCreateJoin',

  data: ()=>({

  })

};


</script>


<style>

.section-create-join{
    height: 300px;
    width: 550px;
    margin: 0 auto;
    margin-top: 30%;
}

.create{
    height: 100px;
}

.join{
    height: 100px;
}

.btn-create-join{
    background-color: #F92525;
    box-shadow: 6px 6px 0 black;
    color: white;
    font-family: 'Showcard Gothic', sans-serif;
    transform: skewX(-15deg);
    padding: 20px 60px;
}

.btn-create-join:hover{
    box-shadow: 10px 10px 0 #FCCD00;
    transition: 0.5s;
}

.code-join{
    margin-left: 8%;
    padding: 5px 5px;
    background-color: #FCCD00;
    color: white;
    transform: skewX(-15deg);
}

@media screen and (min-width: 200px) and (max-width: 640px) {

    .section-create-join{
        width: 450px;
    }
    .code-join{
        margin-left: 5%;
    }
    .btn-create-join{
        padding: 10px 30px;
    }

}

</style>
