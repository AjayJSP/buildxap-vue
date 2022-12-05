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
              <v-col cols="12" sm="12">
                <v-text-field label="Description*" v-model="newEstimateData.description" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Job Plan*" v-model="newEstimateData.job_plan" />

                <!-- <v-select
                  :items="['Person', 'Lead', 'Buisness', 'Archived']"
                  label="Type*"
                  required
                ></v-select> -->
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Status*" v-model="newEstimateData.status" />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Client*" required v-model="newEstimateData.client"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Date*" required v-model="newEstimateData.date"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="handleCreateEstimate(newEstimateData)"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "EstimateDrawer",
  props: ["openDrawer", "handleCreateEstimate"],
  data() {
    return {
      dialog: this.openDrawer,
      clientName: null,
      newEstimateData: {
        description: "",
        status: "",
        job_plan: "",
        client: "",
        date: "",
      },
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
};
</script>
<style lang=""></style>
