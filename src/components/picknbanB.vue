<template>
    <v-container class="pa-4 text-center">
        <div class="fixed-top">
            <div class="ctn-top sticky-top">Timer:{{time}}</div>
        </div>

<div class="main">
    <h1 class="text-center font-weight-thin">Selectionnez un circuit</h1>

    <div class="row">
        <div class="col-6 col-md-4">
            <h2>
                Teams A
            </h2>
            <div class="row">
                <div class="col-4"  v-for="item in bansA" v-bind:key="item.id">
                    <Carte :id="item.id" choice="ban" :src="item.src"></Carte>
                </div>
            </div>
        </div>
        <div class="col-4 d-none d-md-block" style="border-color: black">
            <div class="text-center">
                <div v-if="player == 0"><h2>Joueur 1</h2></div>
                <div v-if="player == 1"><h2>Joueur 2</h2></div>
                <div v-if="porb == false"><h2>pick</h2></div>
                <div v-if="porb == true"><h2>ban</h2></div>
            </div>
        </div>
        <div class="col-6 col-md-4">
            <h2>
                Team B
            </h2>
            <div class="row">
                <div class="col-4"  v-for="item in bansB" v-bind:key="item.id">
                    <Carte :id="item.id" choice="ban" :src="item.src"></Carte>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div class="row">
                <div class="col-2"  v-for="item in picksA" v-bind:key="item.id">
                    <Carte :id="item.id" choice="pick" :src="item.src"></Carte>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-2" v-for="item in picksB" v-bind:key="item.id">
                    <Carte :id="item.id" choice="pick"  :src="item.src"></Carte>
                </div>
            </div>
        </div>
    </div>
    <v-row class="fill-height" align="center" justify="center">
        <v-col  cols="12" md="4"  v-for="item in items" v-bind:key="item.id" >
            <div v-if="readyB==false || readyA ==false ">
                <Carte :id="item.id" choice="neutral" :src="item.src"></Carte>
            </div>
            <div v-if="selection !== item.id && picks.includes(item.id) == false && bans.includes(item.id) == false && readyB==true && readyA== true">
                <div v-if="player==1">
                    <Carte :id="item.id" choice="neutral" v-on:click.native="putinselection(item.id)" :src="item.src"></Carte>
                </div>
                <div v-if="player==0">
                    <Carte :id="item.id" choice="neutral" :src="item.src"></Carte>
                </div>
            </div>
            <div v-if="selection == item.id && porb==false || picks.includes(item.id) == true">
                <Carte :id="item.id" choice="pick" :src="item.src"></Carte>
            </div>
            <div v-if="selection == item.id && porb==true || bans.includes(item.id) == true">
                <Carte :id="item.id" choice="ban" :src="item.src"></Carte>
            </div>
        </v-col>
    </v-row>

    <div class="ctn-bottom fixed-bottom d-block text-center d-flex justify-content-center">
        <div v-if="readyB==true && readyA== true">
            <button class="cta" @click="putinlist()">
                <span style="color: black; text-align:center">Selectionner</span>
            </button>
        </div>
        <div v-if="readyB==false && readyA== false">
            <button class="cta2" @click="start()">
                <span style="color: white; text-align:center">Commencer</span>
            </button>
        </div>
    </div>
</div>
    </v-container>
</template>

<script>
    import io from 'socket.io-client';
    import Carte from './map';

    export default {
        name: "picknbanB",
        components: {
            Carte
        },
        data: () => ({
            items: [
                {
                    id: 1,
                    src: require('../assets/map/Circuits/01-crique-crash.jpg'),
                    type: 'ctr',
                    name: '1  crique crash'

                },
                {
                    id: 2,
                    src: require('../assets/map/Circuits/02-grotte-mystere.jpg'),
                    type: 'ctr',
                    name: '2   grote mystere'


                },
                {
                    id: 3,
                    src: require('../assets/map/Circuits/03-circuit-egouts.jpg'),
                    type: 'ctr',
                    name: '3    circuit egouts'

                },
                {
                    id: 4,
                    src: require('../assets/map/Circuits/05-stade-glissade.jpg'),
                    type: 'ctr',
                    name: '4    stade glissade'

                },
                {
                    id: 5,
                    src: require('../assets/map/Circuits/06-circuit-turbo.jpg'),
                    type: 'ctr',
                    name: '6    circuit turbo'


                },

                {
                    id: 6,
                    src: require('../assets/map/Circuits/07-parc-coco.jpg'),
                    type: 'ctr',
                    name: '7    parc coco'

                },
                {
                    id: 7,
                    src: require('../assets/map/Circuits/08-temple-tigre.jpg'),
                    type: 'ctr',
                    name: '8 temple tigre'

                },
                {
                    id: 8,
                    src: require('../assets/map/Circuits/09-pyramide-papu.jpg'),
                    type: 'ctr',
                    name: '9  pyramide-papu'

                },
                {
                    id: 9,
                    src: require('../assets/map/Circuits/10-canyon-dingo.jpg'),
                    type: 'ctr',
                    name: '10  canyon dingo'
                },

                {
                    id: 10,
                    src: require('../assets/map/Circuits/11-col-polar.jpg'),
                    type: 'ctr',
                    name: '11 col polar'

                },
                {
                    id: 11,
                    src: require('../assets/map/Circuits/12-arene-tiny.jpg'),
                    type: 'ctr',
                    name: '12 arene tiny'

                },
                {
                    id: 12,
                    src: require('../assets/map/Circuits/13-mines-dragon.jpg'),
                    type: 'ctr',
                    name: '13 mines dragon'
                },
                {
                    id: 13,
                    src: require('../assets/map/Circuits/14-falaises-glacees.jpg'),
                    type: 'ctr',
                    name: '14 falaises glacees'
                },
                {
                    id: 14,
                    src: require('../assets/map/Circuits/15-piste-air.jpg'),
                    type: 'ctr',
                    name: '15  piste air'
                },
                {
                    id: 15,
                    src: require('../assets/map/Circuits/16-chateau-cortex.jpg'),
                    type: 'ctr',
                    name: '16 chateau cortex'

                },
                {
                    id: 16,
                    src: require('../assets/map/Circuits/17-labo-ngin.jpg'),
                    type: 'ctr',
                    name: '17  labo ngin'

                },
                {
                    id: 17,
                    src: require('../assets/map/Circuits/18-station-oxide.jpg'),
                    type: 'ctr',
                    name: '18 station oxide'

                },
                {
                    id: 18,
                    src: require('../assets/map/Circuits/19-ile-infernale.jpg'),
                    type: 'cnk',
                    name: '19 ile infernale'

                },
                {
                    id: 19,
                    src: require('../assets/map/Circuits/20-jungle-en-folie.jpg'),
                    type: 'cnk',
                    name: '20  jungle en folie'

                },
                {
                    id: 20,
                    src: require('../assets/map/Circuits/21-horloge-wumpa.jpg'),
                    type: 'cnk',
                    name: '21  horloge wumpa'

                },
                {
                    id: 21,
                    src: require('../assets/map/Circuits/22-androides.jpg'),
                    type: 'cnk',
                    name: '22 androides'

                },
                {
                    id: 22,
                    src: require('../assets/map/Circuits/23-electrons.jpg'),
                    type: 'cnk',
                    name: '23 eletrons'

                },
                {
                    id: 23,
                    src: require('../assets/map/Circuits/24-eaux-profondes.jpg'),
                    type: 'cnk',
                    name: 'eaux profondes'

                },
                {
                    id: 24,
                    src: require('../assets/map/Circuits/25-foudre.jpg'),
                    type: 'cnk',
                    name: '25 foudre'

                },
                {
                    id: 25,
                    src: require('../assets/map/Circuits/26-temple-de-tiny.jpg'),
                    type: 'cnk',
                    name: '26  temple de tiny'

                },
                {
                    id: 26,
                    src: require('../assets/map/Circuits/27-gorges-du-meteore.jpg'),
                    type: 'cnk',
                    name: '27  gorges du meteore'

                },
                {
                    id: 27,
                    src: require('../assets/map/Circuits/28-ruines-de-barin.jpg'),
                    type: 'cnk',
                    name: '28  ruines de barin'

                },
                {
                    id: 28,
                    src: require('../assets/map/Circuits/29-hors-temps.jpg'),
                    type: 'cnk',
                    name: '29  hors temps'

                },

                {
                    id: 29,
                    src: require('../assets/map/Circuits/30-production.jpg'),
                    type: 'cnk',
                    name: '30 production'

                },

                {
                    id: 30,
                    src: require('../assets/map/Circuits/31-hyperespace.jpg'),
                    type: 'cnk',
                    name: '31  hyperespace'

                },
                {
                    id: 31,
                    src: require('../assets/map/Circuits/32-circuit-du-crepuscule.jpg'),
                    type: 'bonus',
                    name: '32 circuit du crepscule'

                },
                {
                    id: 32,
                    src: require('../assets/map/Circuits/33-parc-prehistorique.jpg'),
                    type: 'bonus',
                    name: '33 parc prehistorique'

                },
                {
                    id: 33,
                    src: require('../assets/map/Circuits/34-circuit-de-spyro.jpg'),
                    type: 'bonus',
                    name: '24 circuit de spyro'

                },
                {
                    id: 34,
                    src: require('../assets/map/Circuits/35-cauchemar-de-nina.jpg'),
                    type: 'bonus',
                    name: '35  cauchemar de nina'

                },
                {
                    id: 35,
                    src: require('../assets/map/Circuits/36-cirque-koala.jpg'),
                    type: 'bonus',
                    name: '36 cirque koala'

                },
                {
                    id: 36,
                    src: require('../assets/map/Circuits/37-chevauchee-de-pain-d-epice.jpg'),
                    type: 'bonus',
                    name: '37 cheuvauchee de pain dépice'

                },
                {
                    id: 37,
                    src: require('../assets/map/Circuits/38-megamix-mania.jpg'),
                    type: 'bonus',
                    name: '38 megamix mania'

                },
                {
                    id: 38,
                    src: require('../assets/map/Circuits/39-drive-dangereux.jpg'),
                    type: 'bonus',
                    name: '39 drive dangereux'

                },

            ],
            transparent: 'rgba(255, 255, 255, 0)',
            nameA:'',
            nameB:'',
            selection:null,
            picks:[],
            bans:[],
            picksA:[],
            picksB:[],
            bansA:[],
            bansB:[],
            time:30,
            readyA:false,
            readyB:false,
            player:0,
            porb:true,
            nbturn:1,
            socket : io('localhost:3001')
        }),
        methods: {
            start () {
                this.readyB=true;
                this.socket.emit('readyB',{ready: this.readyA,id: this.$route.params.id});
                if(this.readyB== true && this.readyA== true){
                    this.timer = setInterval( () => {
                        if (this.time > 0) {
                            this.time--;
                            if(this.nbturn ==7){
                                this.porb=false;
                                this.socket.emit('porb',{porb: this.porb, id: this.$route.params.id})
                            }else if(this.nbturn == 17){
                                this.time=0;
                                clearInterval(this.timer);
                            }
                        } else {
                            this.time=30;
                            this.nbturn++;
                            this.socket.emit('nbturn',{nbturn:this.nbturn,id: this.$route.params.id});
                            if(this.player == 0 ){
                                this.player ++;
                                this.socket.emit('changeplayer',{player:this.player,id: this.$route.params.id})
                            }else{
                                this.player--;
                                this.socket.emit('changeplayer',{player:this.player,id: this.$route.params.id})
                            }

                        }
                        this.socket.emit('timer',{time:this.time,id: this.$route.params.id});
                    }, 1000 )
                }
            },
            putinselection(id){
                this.selection= id
            },
            putinlist () {
                if(this.porb==false && this.selection!== null && this.picks.includes(this.selection) == false){
                    this.socket.emit('pickid',{id:this.selection,idr: this.$route.params.id,player:this.player});
                    this.selection = null;
                    this.time=30;
                    this.socket.emit('timer',{time:this.time,id: this.$route.params.id});
                    this.nbturn++;
                    this.socket.emit('nbturn',{nbturn:this.nbturn,id: this.$route.params.id});
                    if(this.player == 0 ){
                        this.player ++;
                        this.socket.emit('changeplayer',{player:this.player,id: this.$route.params.id})
                    }else{
                        this.player--;
                        this.socket.emit('changeplayer',{player:this.player,id: this.$route.params.id})
                    }

                }else if(this.porb==true && this.selection!== null && this.bans.includes(this.selection) == false){
                    this.socket.emit('banid',{id:this.selection,idr: this.$route.params.id,player:this.player});
                    this.selection = null;
                    this.time=30;
                    this.socket.emit('timer',{time:this.time,id: this.$route.params.id});
                    this.nbturn++;
                    this.socket.emit('nbturn',{nbturn:this.nbturn,id: this.$route.params.id});
                    if(this.player == 0 ){
                        this.player ++;
                        this.socket.emit('changeplayer',{player:this.player,id: this.$route.params.id})
                    }else{
                        this.player--;
                        this.socket.emit('changeplayer',{player:this.player,id: this.$route.params.id})
                    }
                }
            }
        },
        mounted() {
            this.socket.on('player', (data) => {
                if(data.id == this.$route.params.id ) {
                    this.player = data.player;
                }
            });
            this.socket.on('turn', (data) => {
                if(data.id == this.$route.params.id ) {
                    this.nbturn = data.nbturn;
                }
            });
            this.socket.on('time', (data) => {
                if(data.id == this.$route.params.id ){
                    this.time=data.time;
                }
            });
            this.socket.on('pid', (data) => {
                if(data.idr == this.$route.params.id ) {
                    this.picks.push(data.id);
                    let map = this.items.find(element=>element.id == data.id);
                    if (data.player == 0) {
                        this.picksA.push(map);
                    } else if (data.player == 1) {
                        this.picksB.push(map);
                    }
                }
            });
            this.socket.on('bid', (data) => {
                if(data.idr == this.$route.params.id ) {
                    this.bans.push(data.id);
                    let map = this.items.find(element=>element.id == data.id);
                    if(data.player==0){
                        this.bansA.push(map)
                    }
                    else if(data.player==1){
                        this.bansB.push(map)
                    }
                }
            });
            this.socket.on('readA', (data) => {
                if(data.id == this.$route.params.id ){
                    this.readyA=data.ready;
                }
            });
            this.socket.on('teamA', (data) => {
                if(data.id == this.$route.params.id ){
                    this.nameA= data.name;
                }
            });
            this.socket.on('teamB', (data) => {
                if(data.id == this.$route.params.id ){
                    this.nameB= data.name;
                }
            });
            this.socket.on('por', (data) => {
                if(data.id == this.$route.params.id ){
                    this.porb= data.porb;
                }
            });
        }
    }
</script>

<style scoped>
    .main{
        margin-top: 50px;
    }
    h1, v-title, .ctn-top{
        font-family: 'Showcard Gothic', sans-serif;
        color: white;
    }

    .wrapper {
        display: flex;
    }

    /* Button "Selectionner"*/

    .cta {
        display: flex;
        padding: 10px 60px;
        text-decoration: none;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
        color: white;
        background: yellow;
        transition: 1s;
        box-shadow: 6px 6px 0 black;
        transform: skewX(-15deg);
    }

    .cta:hover {
        transition: 0.5s;
        box-shadow: 10px 10px 0 white;
    }

    .cta span:nth-child(2) {
        transition: 0.5s;
        margin-right: 0px;
    }

    .cta:hover  span:nth-child(2) {
        transition: 0.5s;
        margin-right: 45px;
    }

    span {
        transform: skewX(15deg)
    }

    span:nth-child(2) {
        width: 20px;
        margin-left: 30px;
        top: 12%;
    }

    /* Button "Commencer"*/

    .cta2 {
        display: flex;
        padding: 10px 60px;
        text-decoration: none;
        font-family: 'Showcard Gothic', sans-serif;
        font-size: 30px;
        color: white;
        background: #06CE28;
        transition: 1s;
        box-shadow: 6px 6px 0 black;
        transform: skewX(-15deg);
    }

    .cta2:hover {
        transition: 0.5s;
        box-shadow: 10px 10px 0 white;
    }

    .cta2 span:nth-child(2) {
        transition: 0.5s;
        margin-right: 0px;
    }

    .cta2:hover  span:nth-child(2) {
        transition: 0.5s;
        margin-right: 45px;
    }

    span {
        transform: skewX(15deg)
    }

    span:nth-child(2) {
        width: 20px;
        margin-left: 30px;
        top: 12%;
    }

    /**************SVG****************/

    path.one {
        transition: 0.4s;
        transform: translateX(-60%);
    }

    path.two {
        transition: 0.5s;
        transform: translateX(-30%);
    }

    .cta:hover path.three {
        animation: color_anim 1s infinite 0.2s;
    }

    .cta:hover path.one {
        transform: translateX(0%);
        animation: color_anim 1s infinite 0.6s;
    }

    .cta:hover path.two {
        transform: translateX(0%);
        animation: color_anim 1s infinite 0.4s;
    }

    /* SVG animations */

    @keyframes color_anim {
        0% {
            fill: white;
        }
        50% {
            fill: #FCCD00;
        }
        100% {
            fill: white;
        }
    }

    .ctn-top {
        background-color: red;
        padding: 1em;
        margin-bottom: 20px;
    }

    .ctn-bottom {
        margin-bottom: 30px;
    }


    body {
        background-color: #00A8E7 !important;
    }
</style>