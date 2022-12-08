<!-- @format -->

<template lang="">
  <v-card class="ma-5 h-100">
    <v-tabs bg-color="green" center-active>
      <router-link to="/estimate/1/estimate_details">
        <v-tab>
          <span class="estimate_tab ma-1 pa-1">Estimate Details</span>
        </v-tab>
      </router-link>
      <router-link to="/estimate/:id/plans">
        <v-tab>
          <span class="estimate_tab ma-1 pa-1">Plans</span>
        </v-tab>
      </router-link>
      <router-link to="/estimate/:id/estimate_costing">
        <v-tab>
          <span class="estimate_tab ma-1 pa-1">Estimate Costing</span>
        </v-tab>
      </router-link>
      <router-link to="/estimate/:id/request_for_quotes">
        <v-tab>
          <span class="estimate_tab ma-1 pa-1">Request for Quotes</span>
        </v-tab>
      </router-link>
      <router-link to="/estimate/:id/specification">
        <v-tab>
          <span class="estimate_tab ma-1 pa-1">SPECIFICATION</span>
        </v-tab>
      </router-link>

      <v-tab> <!-- <v-btn icon="mdi-dots-vertical"></v-btn> --></v-tab>
    </v-tabs>

    <router-view />
  </v-card>
</template>
<script>
export default {
  name: "EstimateNavigation",
};
</script>
<style scoped lang="css">
.estimate_tab {
  font-size: 18px;

  text-transform: uppercase;
}
/* nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: red;
} */
.router-link-exact-active {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
