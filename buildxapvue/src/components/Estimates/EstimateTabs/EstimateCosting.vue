<!-- @format -->

<template lang="">
  <div class="bg-whitesmoke h-100" style="background-color: whitesmoke">
    <!-- EstimateNewGroupDrawer -->
    <div v-if="openDrawer">
      <EstimateNewGroupDrawer :openDrawer="openDrawer" :openDrawerFunction="openDrawerFunction" />
    </div>

    <v-container class="ma-0" style="max-width: 100%">
      <v-row>
        <v-col md="3" lg="3" class="mr-auto">
          <v-btn-toggle rounded="1" divided variant="outlined" color="primary" group>
            <v-btn small color="green"> Expand </v-btn>
            <v-btn small color="red"> Collapse </v-btn>
          </v-btn-toggle>
        </v-col>
        <!--  -->
        <v-col md="1" lg="1">
          <v-btn small color="primery" @click="openDrawer = !openDrawer"> ADD</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="ma-5 mt-10">
      <v-card v-for="(estimateCostingGroup, index) in estimateCostingGroups" :key="index">
        <v-list v-model:opened="open">
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">{{ estimateCostingGroup.groupName }}</v-list-item>
            </template>

            <v-list-group>
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props">
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-left">No</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Description</th>
                        <th class="text-left">Option</th>
                        <th class="text-left">Type</th>
                        <th class="text-left">QTY</th>
                        <th class="text-left">UOM</th>
                        <th class="text-left">Unit Cost</th>
                        <th class="text-left">Markup</th>
                        <th class="text-left">GST</th>
                        <th class="text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, itemIndex) in estimateCostingGroup.items" :key="itemIndex">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.itemName }}</td>
                        <td>{{ item.itemDescription }}</td>
                        <td>{{ item.optionName }}</td>
                        <td>{{ item.type }}</td>
                        <td>{{ item.qty }}</td>
                        <td>{{ item.uom }}</td>
                        <td>{{ item.unitCost }}</td>

                        <td>{{ item.markupPercentage }}</td>
                        <td>{{ item.gst }}</td>
                        <td>
                          <v-btn small color="red">
                            <v-icon icon="mdi-delete" />
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              ></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>
<script>
import EstimateNewGroupDrawer from "./EstimateNewGroupDrawer.vue";
export default {
  name: "EstimateCosting",
  components: { EstimateNewGroupDrawer },
  data: () => ({
    open: null,
    openDrawer: false,
    estimateCostingGroups: [
      {
        groupCode: "1",
        groupName: "Group 1",
        items: [
          {
            catalogueId: null,
            catalogueItemId: null,
            contactId: null,
            gst: "10",
            included: true,
            itemCategory: "",
            itemCode: "1",
            itemDescription:
              "\tBuilding PermitOpenable skylight supply & fitOpenable skylight supply & fit",
            itemGroupCode: "1",
            itemGroupName: "\tPreliminaries",
            itemId: "755b656a-f66c-4d77-81b5-d02c94bc5073",
            itemName: "Building Permit",
            lineItemId: "28018573-0328-4a44-b034-d3daf79ec772",
            markupPercentage: "10",
            optionId: "371b9762-3d4c-4397-8205-0d8ed337e8a1",
            optionName: "STANDARD",
            qty: "10",
            quoteId: null,
            quoteLineItemId: null,
            referenceQuotes: false,
            type: "Supply And Install",
            unitCost: "100",
            uom: "m3",
          },
        ],
      },
      {
        groupCode: "2",
        groupName: "Group 2",
        items: [
          {
            catalogueId: null,
            catalogueItemId: null,
            contactId: null,
            gst: "10",
            included: true,
            itemCategory: "",
            itemCode: "1",
            itemDescription: "itemDescription 2",
            itemGroupCode: "1",
            itemGroupName: "\tPreliminaries",
            itemId: "755b656a-f66c-4d77-81b5-d02c94bc5073",
            itemName: "Building Permit",
            lineItemId: "28018573-0328-4a44-b034-d3daf79ec772",
            markupPercentage: "10",
            optionId: "371b9762-3d4c-4397-8205-0d8ed337e8a1",
            optionName: "STANDARD",
            qty: "10",
            quoteId: null,
            quoteLineItemId: null,
            referenceQuotes: false,
            type: "Supply And Install",
            unitCost: "100",
            uom: "m3",
          },
          {
            catalogueId: null,
            catalogueItemId: null,
            contactId: null,
            gst: "10",
            included: true,
            itemCategory: "",
            itemCode: "1",
            itemDescription:
              "\tBuilding PermitOpenable skylight supply & fitOpenable skylight supply & fit",
            itemGroupCode: "1",
            itemGroupName: "\tPreliminaries",
            itemId: "755b656a-f66c-4d77-81b5-d02c94bc5073",
            itemName: "Building Permit",
            lineItemId: "28018573-0328-4a44-b034-d3daf79ec772",
            markupPercentage: "10",
            optionId: "371b9762-3d4c-4397-8205-0d8ed337e8a1",
            optionName: "STANDARD",
            qty: "10",
            quoteId: null,
            quoteLineItemId: null,
            referenceQuotes: false,
            type: "Supply And Install",
            unitCost: "100",
            uom: "m3",
          },
        ],
      },
    ],
  }),
  methods: {
    openDrawerFunction() {
      this.openDrawer = false;
    },
  },
};
</script>
<style lang=""></style>
