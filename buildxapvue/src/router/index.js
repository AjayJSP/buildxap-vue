/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
// estimate
import Estimates from "../components/Estimates/Estimates.vue";
import Specification from "../components/Estimates/EstimateTabs/Specification.vue";
import Plans from "../components/Estimates/EstimateTabs/Plans.vue";
import EstimateCosting from "../components/Estimates/EstimateTabs/EstimateCosting.vue";
import RequestsForQuote from "../components/Estimates/EstimateTabs/RequestsForQuote.vue";
import EstimateDetails from "../components/Estimates/EstimateTabs/EstimateDetails.vue";

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
import EstimateNavigation from "../components/Navigations/EstimateNavigation.vue";

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
  // Estimate Navigation
  {
    path: "/estimate/:id",
    name: "EstimateNavigation",
    redirect: "/estimate/:id/estimate_details",
    component: EstimateNavigation,

    children: [
      {
        path: "/estimate/:id/estimate_details",
        name: "EstimateDetails",
        component: EstimateDetails,
      },
      {
        path: "/estimate/:id/plans",
        name: "Plans",
        component: Plans,
      },
      {
        path: "/estimate/:id/estimate_costing",
        name: "EstimateCosting",
        component: EstimateCosting,
      },
      {
        path: "/estimate/:id/request_for_quotes",
        name: "RequestsForQuote",
        component: RequestsForQuote,
      },
      {
        path: "/estimate/:id/specification",
        name: "Specification",
        component: Specification,
      },
    ],
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
