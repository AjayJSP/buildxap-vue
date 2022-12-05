<!-- @format -->

<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2">
      <div style="width: inherit">
        <v-toolbar title="BuildX" style="width: inherit">
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>

          <v-app-bar-nav-icon> </v-app-bar-nav-icon>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
    </v-app-bar>

    <v-card>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-home-city" title="Dashboard" value="dashboard"> </v-list-item>
          </router-link>
          <router-link to="/estimates">
            <v-list-item prepend-icon="mdi-account" title="Estimates" value="estimates"></v-list-item>
          </router-link>
          <router-link to="/quotes">
            <v-list-item prepend-icon="mdi-account" title="Quotes" value="quotes"></v-list-item>
          </router-link>

          <router-link to="/jobs">
            <v-list-item prepend-icon="mdi-account" title="Jobs"></v-list-item>
          </router-link>

          <router-link to="/clients">
            <v-list-item prepend-icon="mdi-account" title="Clients"></v-list-item>
          </router-link>

          <router-link to="/contacts">
            <v-list-item prepend-icon="mdi-account" title="Contacts"></v-list-item>
          </router-link>

          <router-link to="/job_plans">
            <v-list-item prepend-icon="mdi-account" title="Job Plans"></v-list-item>
          </router-link>

          <router-link to="/variations">
            <v-list-item prepend-icon="mdi-account" title="Variations"></v-list-item>
          </router-link>

          <router-link to="/cost_centre">
            <v-list-item prepend-icon="mdi-account" title="Cost Centres"></v-list-item>
          </router-link>

          <router-link to="/catalogues">
            <v-list-item prepend-icon="mdi-account" title="Catalogues"></v-list-item>
          </router-link>

          <router-link to="/users">
            <v-list-item prepend-icon="mdi-account" title="Users"></v-list-item>
          </router-link>

          <router-link to="/roles">
            <v-list-item prepend-icon="mdi-account" title="Roles"></v-list-item>
          </router-link>

          <router-link to="/setting">
            <v-list-item prepend-icon="mdi-account" title="Setting"></v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-main>
      <v-card height="647px">
        <router-view />
      </v-card>
    </v-main>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      rail: true,
    };
  },
};
</script>
<style>
a {
  text-decoration: none;
  color: white;
  font-size: larger;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
