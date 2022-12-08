<template lang="">
  <div>
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-btn small color="primery" @click="openDrawerFunction()"> Cancel</v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "EstimateNewGroupDrawer",
  props: { openDrawerFunction: Function, openDrawer: Boolean },
  data() {
    return {
      drawer: this.openDrawer,
    };
  },
  created() {
    console.log("created", this.drawer);
  },
  beforeUnmount() {
    this.drawer = false;
    console.log("beforeMount");
  },
};
</script>
<style lang=""></style>
