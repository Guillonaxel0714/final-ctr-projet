import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import PageRegles from "../components/PageRegles.vue";
import PageCreateJoin from "../components/PageCreateJoin.vue";
import PageTeam from "../components/PageTeam.vue";
import picknbanA from "../components/picknbanA";
import picknbanB from "../components/picknbanB";
import picknbanS from "../components/picknbanS";
Vue.use(VueRouter);
const routes =[
    {
        path: "/", name: "HomePage", component: HomePage
    },
    {
        path: "/regles", name: "PageRegles", component: PageRegles
    },    
    {
        path: "/Create-Join", name: "PageCreateJoin", component: PageCreateJoin
    },
    {
        path: "/:id", name: "PageTeam", component: PageTeam
    },
    {
        path: "/:id/TeamA",
        name: "TeamA",
        component: picknbanA,
    },
    {
        path: "/:id/TeamB",
        name: "TeamB",
        component: picknbanB,
    },
    {
        path: "/:id/Spectator",
        name: "Spectator",
        component: picknbanS,
    },
];

const router= new VueRouter({routes});
export default router;  