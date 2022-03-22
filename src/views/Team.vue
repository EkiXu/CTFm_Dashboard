<template>
  <v-container id="user-profile" fluid category="section">
    <v-row style="height:56px" />
    <v-row justify="center">
      <v-col cols="12" md="8">
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Edit Team</div>
          </template>

          <v-data-table
            :headers="headers"
            :items="teams"
            sort-by="id"
            class="elevation-1"
            style="box-shadow:none !important"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Team</v-toolbar-title>
                <v-divider class="mx-4" inset vertical />
                <v-spacer />
                <v-dialog v-model="dialog" hide-overlay persistent>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="6" sm="5" md="6">
                            <v-text-field
                              v-model="editedTeam.name"
                              label="Team Name"
                              prepend-icon="mdi-account-group"
                            />
                          </v-col>
                          <v-col cols="6">
                            <v-select
                              :items="editedTeam.members"
                              v-model="editedTeam.leader"
                              label="Leader"
                              prepend-icon="mdi-account-group-outline"
                              item-text="nickname"
                              item-value="id"
                            ></v-select>
                          </v-col>
                          <v-col cols="12">
                            <!--<v-file-input
                                accept="image/png, image/jpeg, image/bmp"
                                prepend-icon="mdi-camera"
                                label="Avatar"
                            ></v-file-input>-->
                            <v-text-field
                              v-model="editedTeam.avatar_url"
                              label="Team Avatar"
                              prepend-icon="mdi-camera"
                            />
                          </v-col>

                          <v-col cols="12">
                            <h2 style="padding-bottom:10px">Description</h2>
                            <v-textarea
                              v-model="editedTeam.description"
                              auto-grow
                              clearable
                              clear-icon="mdi-close-circle"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer />
                      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
           <template v-slot:item.avatar_url="{ item }">
              <v-avatar>
                <img
                  :src="item.avatar_url"
                >
              </v-avatar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import Markdown from "vue-meditor";
import { getCategoryListAPI } from "@/api/category";
import {
  addTeamAPI,
  deleteTeamByIDAPI,
  updateTeamByIDAPI,
  getTeamByIDAPI,
  getTeamListAPI
} from "@/api/team";
export default {
  components: {
    BaseCard,
    Markdown
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id"
      },
      {
        text: "Avatar",
        sortable: false,
        value: "avatar_url"
      },
      {
        text: "Name",
        sortable: false,
        value: "name"
      },
      { text: "Solved", value: "solved_amount" },
      { text: "Points", value: "points" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    teams: [],
    editedIndex: -1,
    editedTeam: {
      id: 0,
      name: "",
      description: "",
      avatar_url: "",
      leader:0,
    },
    defaultTeam: {
      id: 0,
      name: "",
      description: "",
      avatar_url: "",
      leader:0,
    },
    rules: {
      nameRules: [v => !!v || "Team Title is required"],
      pointsRules: [
        v => !!v || "Points is required",
        v => /^[0-9]*$/.test(v) || "Points must be valid"
      ],
      portRules: [
        v => !!v || "Ports is required",
        v => /^[0-9]*$/.test(v) || "Ports must be valid",
        v => (0 < v && v < 66536) || "Ports must between 1~66535"
      ],
      categoryRules: [v => !!v || "Category is required"],
      contentnRules: [v => !!v || "Content is required"],
      flagRules: [
        v => !!v || "Flag is required"
        //v=> /^flag{.*}$/.test(v) || 'Flag must be valid'
      ]
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Team" : "Edit Team";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  async created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const res1 = await getTeamListAPI();
      this.teams = res1.data;
      const res2 = await getCategoryListAPI();
      this.categories = res2.data;
    },

    async editItem(item) {
      this.editedIndex = this.teams.indexOf(item);
      const res = await getTeamByIDAPI(item.id);
      this.editedTeam = Object.assign({}, res["data"]);
      this.dialog = true;
    },

    async deleteItem(item) {
      const index = this.teams.indexOf(item);
      confirm("Are you sure you want to delete this Team?") &&
      this.teams.splice(index, 1);
      const res = await deleteTeamByIDAPI(item.id);
      console.log("delete:",res);
      this.$vToastify.success("Deleted Successfully");
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedTeam = Object.assign({}, this.defaultTeam);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.teams[this.editedIndex], this.editedTeam);
        const res = await updateTeamByIDAPI(
          this.editedTeam.id,
          this.editedTeam
        );
        this.$vToastify.success("Edited Successfully");
      } else {
        const res = await addTeamAPI(this.editedTeam);
        this.editedTeam.points = parseInt(
          this.editedTeam.initial_points
        );
        this.editedTeam.id = res["data"]["id"];
        this.teams.push(this.editedTeam);
        this.$vToastify.success("Added Successfully");
      }
      this.close();
    }
  }
};
</script>

<style>
</style>