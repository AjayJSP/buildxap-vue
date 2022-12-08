<!-- @format -->
<template lang="">
  <div style="width: 100%">
    <div v-if="openDrawer">
      <EstimateDrawer v-bind:openDrawer="openDrawer" :handleCreateEstimate="handleCreateEstimate" />
    </div>
    <span>
      <h2 class="mt-5 ml-5">Estimates</h2>
    </span>
    <div>
      <div class="d-flex align-end flex-column mr-10 mb-5">
        <v-btn medium outlined color="green" elevation="2" @click="openDrawer = !openDrawer">
          <v-icon medium color="white darken-2" icon="mdi-plus" />
          Create Estimate
        </v-btn>
      </div>
      <v-card class="mx-auto" elevation="4" max-width="95%" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline m-2">
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">No</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">Job Plan</th>
                    <th class="text-left">Status</th>
                    <th class="text-left">Client</th>
                    <th class="text-left">Create Date</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in estimates" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.job_plan }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.client }}</td>
                    <td>{{ item.date }}</td>

                    <td>
                      <router-link :to="{ name: 'EstimateNavigation', params: { id: 1 } }">
                        <v-btn small color="green">
                          <v-icon icon="mdi-pencil" />
                        </v-btn>
                      </router-link>

                      <!-- <router-link to=`estimate/item.id}`>
                        <v-btn small color="green">
                          <v-icon icon="mdi-pencil" />
                        </v-btn>
                      </router-link> -->
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import EstimateDrawer from "./EstimateDrawer.vue";
export default {
  components: { EstimateDrawer },
  name: "Estimates",
  data() {
    return {
      openDrawer: false,
      estimates: [
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
        {
          id: 1,
          description: "abc",
          job_plan: "jobplan",
          status: "draft",
          client: "ajay",
          date: "22/12/22",
        },
      ],
    };
  },
  methods: {
    handleCreateEstimate(obj) {
      console.log("handleCreateEstimate", obj);
      this.estimates.push(obj);
      this.openDrawer = false;
      console.log("estimate", this.estimates);
    },
  },
};
</script>
<style></style>
