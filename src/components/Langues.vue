<template>
    <section class="langue">
        <div class="flags">
            <a><img class="icone" src="../assets/france.png" alt=""></a>
        </div>
        <div class="flags">
            <a><img  class="icone" src="../assets/uk.png" alt=""></a>
        </div>
        <div class="flags">
            <a><img class="icone" src="../assets/germany.png" alt=""></a>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Langues',
}
</script>


<style>

.langue{
    width: 200px;
    height: 32px;
    display: flex;
}

.flags{
    width: 64px;
    height: 32px;
    margin: 0 auto;
    margin-left: 10px;
}

a{
    cursor: pointer;
}

</style>
