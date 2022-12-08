<!-- @format -->

<template lang="">
  <div class="d-flex w-auto h-75">
    <v-card class="w-50 ma-5" title="Estimate Details" text="" variant="tonal">
      <v-divider></v-divider>

      <v-container>
        <v-row no-gutters>
          <v-col cols="6" sm="4">
            <b>
              <v-sheet class="ma-2 pa-2">Estimate No : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Client Name : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Description : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Created Date : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Job Plan :</v-sheet>
              <v-sheet class="ma-2 pa-2"> Status</v-sheet>
            </b>
          </v-col>
          <v-col cols="6" sm="4">
            <div>
              <v-sheet class="ma-2 pa-2">10001 </v-sheet>
              <v-sheet class="ma-2 pa-2">Ajay </v-sheet>
              <v-sheet class="ma-2 pa-2">First Estimate </v-sheet>
              <v-sheet class="ma-2 pa-2">06/12/22 </v-sheet>
              <v-sheet class="ma-2 pa-2">First Job Plan </v-sheet>
              <v-sheet class="ma-2 pa-2">Draft </v-sheet>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card class="w-50 ma-5" title="Client Details" variant="tonal">
      <v-divider></v-divider>
      <v-container>
        <v-row no-gutters>
          <v-col cols="6" sm="5">
            <b>
              <v-sheet class="ma-2 pa-2">Name : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Address : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Phone : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Email : </v-sheet>
              <v-sheet class="ma-2 pa-2"> Source :</v-sheet>
            </b>
          </v-col>
          <v-col cols="6" sm="5">
            <div>
              <v-sheet class="ma-2 pa-2">Ajay </v-sheet>
              <v-sheet class="ma-2 pa-2">ABCD </v-sheet>
              <v-sheet class="ma-2 pa-2">1234 </v-sheet>
              <v-sheet class="ma-2 pa-2">ajaydevkar612@gmail.com </v-sheet>
              <v-sheet class="ma-2 pa-2">referral</v-sheet>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: " EstimateDetails",
};
</script>
<style lang=""></style>
