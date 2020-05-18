<template>
    <div class="card">
        <div v-if="choice=='pick'">
            <div style="border: solid;border-color: green" width="20px" height="20px">
               <img :src="src">
            </div>
        </div>
        <div v-if="choice=='ban'">
            <div style="border: solid;border-color: red" width="20px" height="20px">
                <img :src="src">
            </div>
        </div>
        <div v-if="choice=='neutral'">
            <div style="border: solid;border-color: white" width="20px" height="20px">
                <img :src="src">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carte",
        props: {
            choice:String,
            src:String,
        }
    }
</script>

<style scoped>

</style>