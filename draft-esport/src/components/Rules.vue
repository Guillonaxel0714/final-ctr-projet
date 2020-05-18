<template>
    <div class="regles">
        <h2 class="title-rules">Règles</h2>
        <br>
        <p>Règle 1: no cheat</p>
        <p>Règle 2: no insult/threat</p>
        <p>Règle 3: no Axel allowed</p>
        <p>Règle 4: no DavidLafarge allowed</p>
        <p>Règle 5: Mort Mort Mort</p>
        
    </div>
</template>



<script>
export default {
  name: 'Rules',
};

</script>





<style>

.regles{
    z-index: 1;
    margin: 0 auto;
    position: relative;
    margin-top: 20%;
    height: 500px;
    width: 400px;
    justify-content: center;
    background-color: #F92525;
    border: solid #00BAFE 2px;
    
}

.title-rules{
    font-family: 'Showcard Gothic', sans-serif;
    color: white;
    text-align: center;
    margin-top: 3%;
}

p{
    font-family: 'Showcard Gothic', sans-serif;
    color: white; 
    font-size: 20px;
    margin-left: 3%;
    padding-top: 5%;
}

</style>