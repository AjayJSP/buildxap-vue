/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Estimates from "@/components/Estimates.vue";
import Jobs from "../components/Jobs.vue";
import Quotes from "../components/Quotes.vue";
import Timeline from "../components/Timeline.vue";
import JobsPlan from "../components/JobsPlan.vue";
import Variations from "../components/Variations.vue";
import Clients from "../components/Clients/Clients.vue";
import Contacts from "../components/Contacts.vue";
import CostCenter from "../components/CostCenter.vue";
import Catalogues from "../components/Catalogues.vue";
import Users from "../components/Users.vue";
import Roles from "../components/Roles.vue";
import Settings from "../components/Settings.vue";
import LogOut from "../components/LogOut.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
  },

  {
    path: "/estimates",
    name: "Estimates",
    component: Estimates,
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: Quotes,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobsPlan",
    name: "JobsPlan",
    component: JobsPlan,
  },
  {
    path: "/variations",
    name: "Variations",
    component: Variations,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/costCenter",
    name: "CostCenter",
    component: CostCenter,
  },
  {
    path: "/catalogues",
    name: "Catalogues",
    component: Catalogues,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/roles",
    name: "Roles",
    component: Roles,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/logOut",
    name: "LogOut",
    component: LogOut,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
