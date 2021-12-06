import { createRouter, createWebHashHistory } from "vue-router";
import Aboutme from "../views/Aboutme.vue";
import Mywork from "../views/Mywork.vue";

const routes = [
	{
		path: "/",
		name: "Aboutme",
		component: Aboutme
	},
	{
		path: "/cv",
		name: "Cv",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/CV.vue")
	},
	{
		path: "/mywork",
		name: "Mywork",
		component: Mywork
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
