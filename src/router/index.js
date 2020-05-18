import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import PageRegles from "../components/PageRegles.vue";
import PageCreateJoin from "../components/PageCreateJoin.vue";
import PageTeam from "../components/PageTeam.vue";

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
        path: "/team", name: "PageTeam", component: PageTeam
    },
];

const router= new VueRouter({routes});
export default router;  