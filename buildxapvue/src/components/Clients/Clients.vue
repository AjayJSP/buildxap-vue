<!-- @format -->

<template lang="">
  <!--  display: flex; flex-direction: row" -->
  <div style="width: 100%">
    <div v-if="openDrawer">
      <CreateClientDrawer
        :openDrawer="openDrawer"
        @callEmit="calledFromChildEmil"
        :sendClientData="sendClientData"
      />
    </div>
    <span>
      <h2 class="mt-5 ml-5">Clients</h2>
    </span>
    <div style="width: 100%">
      <div class="d-flex align-end flex-column mr-10 mb-5">
        <v-btn medium outlined color="green" elevation="2" @click="openDrawer = !openDrawer">
          <v-icon medium color="green darken-2"> mdi-plus </v-icon>
          Create Client
        </v-btn>
      </div>
      <v-card class="mx-auto" elevation="4" max-width="95%" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline m-2">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Type</th>
                      <th class="text-left">Email</th>
                      <th class="text-left">Phone</th>
                      <th class="text-left">Mobile</th>
                      <th class="text-left">Address</th>
                      <th class="text-left">City</th>
                      <th class="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="client in clients" :key="client.name">
                      <td>{{ client.name }}</td>
                      <td>{{ client.type }}</td>
                      <td>{{ client.email }}</td>
                      <td>{{ client.phone }}</td>
                      <td>{{ client.mobile }}</td>
                      <td>{{ client.address }}</td>
                      <td>{{ client.city }}</td>
                      <td>
                        <v-btn small outlined color="green" elevation="2">
                          <v-icon medium color="green darken-2"> mdi-pencil edit </v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>
<script>
import CreateClientDrawer from "./CreateClientDrawer.vue";
export default {
  name: "Clients",

  components: {
    CreateClientDrawer,
  },
  methods: {
    sendClientData(clientName) {
      this.openDrawer = false;
      console.log("clientData", clientName);
    },
    calledFromChildEmil(clientData) {
      console.log("calledFromChildEmil", clientData);
    },
  },
  created() {
    console.log("created", this.clients);
  },
  beforeCreate() {
    console.log("berforCreated", this.clients);
  },
  mounted() {
    console.log("mounted", this.clients);
  },
  beforeMount() {
    console.log("beforeMount", this.clients);
  },
  data() {
    return {
      openDrawer: false,
      // drawer: null,
      clients: [
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
        {
          name: "Ajay",
          type: "Buisness",
          email: "ajaydevkar@gmail.com",
          phone: "7798325001",
          mobile: "9422235546",
          address: "Renuka Nagar Bodwad",
          city: "Bodwad",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
