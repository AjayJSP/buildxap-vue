<!-- @format -->

<template lang="">
  <v-card class="ma-5">
    <v-layout>
      <v-app-bar class="bg-green lighten-5" density="compact">
        <div class="d-inline-flex flex-row ma-6">
          <router-link to="/estimate/1/estimate_details">
            <span class="estimate_tab ma-1 pa-1">Estimate Details</span>
          </router-link>

          <router-link to="/estimate/:id/plans">
            <span class="estimate_tab ma-1 pa-1">Plans</span>
          </router-link>

          <router-link to="/estimate/:id/estimate_costing">
            <span class="estimate_tab ma-1 pa-1">Estimate Costing</span>
          </router-link>

          <router-link to="/estimate/:id/request_for_quotes">
            <span class="estimate_tab ma-1 pa-1">Request for Quotes</span>
          </router-link>
          <router-link to="/estimate/:id/specification">
            <span class="estimate_tab ma-1 pa-1">SPECIFICATION</span>
          </router-link>
        </div>

        <template v-slot:append>
          <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        </template>
      </v-app-bar>

      <v-main style="height: 620px">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: "EstimateNavigation",
};
</script>
<style scoped lang="css">
.estimate_tab {
  font-size: 20px;
  font-family: system-ui;
  text-transform: uppercase;
}
/* nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: red;
} */
.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: red;
}
</style>
