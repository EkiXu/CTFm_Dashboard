<template>
  <v-container
    id="user-profile"
    fluid
    category="section"
  >
    <v-row style="height:56px" />
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edit Container
            </div>
          </template>

          <v-data-table
            :headers="headers"
            :items="containers"
            sort-by="id"
            class="elevation-1"
            style="box-shadow:none !important"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Container</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                />
                <v-spacer />
                <!-- <v-dialog
                  v-model="dialog"
                  hide-overlay
                  persistent
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      New Container
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">New Container</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="7"
                            md="8"
                          >
                            <v-text-field
                              v-model="editedContainer.title"
                              :rules="rules.nameRules"
                              label="Container Title"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="5"
                            md="4"
                          >
                            <v-select
                              :items="types"
                              v-model="editedContainer.type_icon"
                              :rules="rules.categoryRules"
                              label="Type Icon"
                              :prepend-icon="editedContainer.type_icon"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                          >
                            <h2 style="padding-bottom:10px">
                              Content
                            </h2>
                            <Markdown
                              v-model="editedContainer.content"
                              :height="260"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> -->
              </v-toolbar>
            </template>
            <template v-slot:item.type="{ item }">
              <v-icon
                v-text="item.type_icon"
              />
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                @click="initialize"
              >
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import Markdown from 'vue-meditor'
import { addContainerAPI,deleteContainerByIDAPI,getContainerListAPI } from '@/api/container'
export default {
  components: {
    BaseCard,
    Markdown
  },
  data: () => ({
    dialog: false,
    types:[
      'mdi-information',
      'mdi-alert',
    ],
    headers: [
      {
        text: 'UUID',
        align: 'start',
        sortable: true,
        value: 'uuid'
      },
      {
        text: 'Challenge',
        sortable: false,
        value: 'challenge'
      },
      { text: 'Port', value: 'port' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    containers: [],
    editedIndex: -1,
    editedContainer: {
      uuid:0,
      challenge:0,
      port: '',
    },
    rules: {
        titleRules: [
          v => !!v || 'Container title is required',
        ],
        contentRules: [
          v => !!v || 'Container title is required',
        ],
      }
  }),
  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  async created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await getContainerListAPI()
      this.containers = res.data
    },

    async deleteItem (item) {
      const index = this.containers.indexOf(item)
      confirm('Are you sure you want to delete this Container?') && this.containers.splice(index, 1)
      const res = await deleteContainerByIDAPI(item.id)
      this.$vToastify.success('Deleted Successfully')
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedContainer = Object.assign({}, this.defaultContainer)
        this.editedIndex = -1
      })
    },

    async save () {
      console.log(this.editedContainer)
      const res = await addContainerAPI(this.editedContainer)
      console.log(res)
      this.editedContainer.id = res['data']['id']
      this.containers.push(this.editedContainer)
      this.close()
      this.$vToastify.success('Added Successfully')
    }
  }
}
</script>

<style>

</style>
