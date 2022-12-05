<!-- @format -->

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">New Client</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Name*" v-model="clientName" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Person', 'Lead', 'Buisness', 'Archived']"
                  label="Type*"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Address"
                  hint="your current address"
                  persistent-hint
                  :value="myName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"> <v-text-field label="City/Town" required></v-text-field> </v-col>
              <v-col cols="12" sm="6"> <v-text-field label="State" required></v-text-field> </v-col>
              <v-col cols="12" sm="6"> <v-text-field label="PostCode" required></v-text-field> </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Mobile Number*" type="number" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="sendDataToParent"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "CreateClientDrawer",
  props: ["openDrawer", "sendClientData"],
  data() {
    return {
      dialog: this.openDrawer,
      clientName: null,
      myName: "Ajay",
    };
  },
  methods: {
    sendDataToParent() {
      console.log("sendDataToParent");
      this.$emit("callEmit", this.clientName);
    },
    // sendClientData() {
    //   this.$emit("clientData", "abcd");
    //   console.log("sendClientData", this.clientName);
    // },
  },
  updated() {
    // this.$emit("update:openDrawer", false);
    console.log("update method called", this.drawer);
  },
  created() {
    console.log("created method called", this.drawer);
    console.log("created method called", this.openDrawer);
  },
};
</script>
<style lang=""></style>
