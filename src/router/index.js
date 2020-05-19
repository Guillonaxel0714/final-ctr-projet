import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import PageRegles from "../components/PageRegles.vue";
import PageCreateJoin from "../components/PageCreateJoin.vue";
import PageTeam from "../components/PageTeam.vue";
import picknbanA from "../components/picknbanA";
import picknbanB from "../components/picknbanB";
import picknbanS from "../components/picknbanS";
import io from 'socket.io-client';

let socket =io('localhost:3001');
Vue.use(VueRouter);
const routes =[
    {
        path: "/", name: "HomePage", component: HomePage, props: { socket: socket }
    },
    {
        path: "/regles", name: "PageRegles", component: PageRegles
    },    
    {
        path: "/Create-Join", name: "PageCreateJoin", component: PageCreateJoin, props: { socket: socket }
    },
    {
        path: "/:id", name: "PageTeam", component: PageTeam, props: { socket: socket }
    },
    {
        path: "/:id/TeamA", name: "TeamA", component: picknbanA, props: { socket: socket }
    },
    {
        path: "/:id/TeamB",
        name: "TeamB",
        component: picknbanB,
        props: { socket: socket }
    },
    {
        path: "/:id/Spectator",
        name: "Spectator",
        component: picknbanS,
        props: { socket: socket }
    },
];

const router= new VueRouter({routes});
export default router;  