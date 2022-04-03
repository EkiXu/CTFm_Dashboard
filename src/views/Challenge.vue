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
              Edit Challenges
            </div>
          </template>

          <v-data-table
            :headers="headers"
            :items="challenges"
            sort-by="id"
            class="elevation-1"
            style="box-shadow:none !important"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Challenges</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                />
                <v-spacer />
                <v-dialog
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
                      New Challenge
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
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
                              v-model="editedChallenge.title"
                              :rules="rules.nameRules"
                              label="Title"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="5"
                            md="4"
                          >
                            <v-select
                              :items="categories"
                              v-model="editedChallenge.category"
                              :rules="rules.categoryRules"
                              item-text="name"
                              item-value="id"
                              label="Category"
                            />
                          </v-col>
                          <v-col
                            cols="8"
                            sm="5"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedChallenge.author"
                              label="Author"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="7"
                            md="8"
                          >
                            <v-text-field
                              v-model="editedChallenge.flag"
                              :rules="rules.flagRules"
                              label="Flag"
                            />
                          </v-col>
                          <v-col
                            cols="4"
                          >
                            <v-text-field
                              v-model="editedChallenge.initial_points"
                              :rules="rules.pointsRules"
                              label="Initial Points"
                            />
                          </v-col>
                          <v-col
                            cols="4"
                          >
                            <v-text-field
                              v-model="editedChallenge.minimum_points"
                              :rules="rules.pointsRules"
                              label="Minimum points"
                            />
                          </v-col>
                          <v-col
                            cols="4"
                          >
                            <v-text-field
                              v-model="editedChallenge.decay"
                              :rules="rules.pointsRules"
                              label="Decay"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                          >
                            <v-text-field
                              v-model="editedChallenge.summary"
                              label="Summary"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                          >
                            <h2 style="padding-bottom:10px">
                              Content
                            </h2>
                            <Markdown
                              v-model="editedChallenge.content"
                              :height="260"
                            />
                          </v-col>
                          <v-col
                            cols="8"
                            sm="5"
                            md="4"
                          >
                            <v-select
                              :items="types"
                              v-model="editedChallenge.has_dynamic_container"
                              item-text="name"
                              item-value="value"
                              label="Type"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="7"
                            md="8"
                          >
                            <v-text-field
                              v-model="editedChallenge.attachment_url"
                              label="Attachment"
                            />
                          </v-col>
                          <template v-if="editedChallenge.has_dynamic_container" >
                            <v-col
                              cols="12"
                              sm="6"
                             >
                              <v-text-field
                                v-model="editedChallenge.image"
                                label="Image"
                              />
                            </v-col>
                            <v-col
                              cols="6"
                              sm="3"
                             >
                              <v-select
                                :items="protocols"
                                v-model="editedChallenge.protocol"
                                item-text="name"
                                item-value="value"
                                label="Protocol"
                              />
                            </v-col>
                            <v-col
                              cols="6"
                              sm="3"
                             >
                              <v-text-field
                                v-model="editedChallenge.redirect_port"
                                label="Port"
                                :rules="rules.portRules"
                              />
                            </v-col>
                            <v-col
                              cols="6"
                             >
                              <v-text-field
                                v-model="editedChallenge.memory_limit"
                                label="Memory Limit"
                              />
                            </v-col>
                            <v-col
                              cols="6"
                             >
                              <v-text-field
                                v-model="editedChallenge.cpu_limit"
                                label="CPU Limit"
                              />
                            </v-col>
                          </template>
                          <v-col cols="12">
                            <v-switch
                              v-model="editedChallenge.is_hidden"
                              label="Hide Challenge"
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
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.is_hidden="{ item }">
              <v-simple-checkbox
                v-model="item.is_hidden"
                disabled
              />
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
import { getCategoryListAPI } from '@/api/category'
import { addChallengeAPI,deleteChallengeByIDAPI,updateChallengeByIDAPI,getChallengeByIDAPI,getChallengeListAPI } from '@/api/challenge'
export default {
  components: {
    BaseCard,
    Markdown
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id'
      },
      {
        text: 'Challenge',
        sortable: false,
        value: 'title'
      },
      { text: 'Points', value: 'points' },
      { text: 'Category', value: 'category' },
      { text: 'Is Hidden', value:'is_hidden'},
      { text: 'Solved', value: 'solved_amount' },
      { text: 'Attempts', value: 'attempt_amount' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    challenges: [],
    editedIndex: -1,
    editedChallenge: {
      id:0,
      title: '',
      summary:'',
      content: '',
      flag: '',
      category: 0,
      initial_points:0,
      minimum_points:0,
      decay:0,
      is_hidden: true,
      have_dynamic_container:false,
      attachment_url:'',
      memory_limit:"128m",
      cpu_limit:0.5,
    },
    defaultChallenge: {
      id:0,
      title: '',
      summary:'',
      content: '',
      flag: '',
      category: 0,
      initial_points:0,
      minimum_points:0,
      decay:0,
      is_hidden: true,
      has_dynamic_container:false,
      attachment_url:'',
    },
    categories:[],
    types:[
      {
        name:"Static URL",
        value:false
      },
      {
        name:"Daynamic Container",
        value:true
      }
    ],
    protocols:[
      {
        name:"TCP",
        value:'1'
      },
      {
        name:"HTTP",
        value:'2'
      },
    ],
    rules: {
        nameRules: [
          v => !!v || 'Challenge Title is required',
        ],
        pointsRules: [v => !!v || 'Points is required',
         v => /^[0-9]*$/.test(v) || 'Points must be valid'],
        portRules: [v => !!v || 'Ports is required',
         v => /^[0-9]*$/.test(v) || 'Ports must be valid',
         v => 0 < v && v < 66536 || 'Ports must between 1~66535',
        ],
        categoryRules: [v => !!v || 'Category is required'],
        contentnRules: [v => !!v || 'Content is required'],
        flagRules: [v => !!v || 'Flag is required',
        //v=> /^flag{.*}$/.test(v) || 'Flag must be valid'
        ]
      }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Challenge' : 'Edit Challenge'
    }
  },

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
      const res1 = await getChallengeListAPI()
      this.challenges = res1.data
      const res2 = await getCategoryListAPI()
      this.categories = res2.data
    },

    async editItem (item) {
      this.editedIndex = this.challenges.indexOf(item)
      const res = await getChallengeByIDAPI(item.id)
      this.editedChallenge = Object.assign({}, res['data'])
      this.dialog = true
    },

    async deleteItem (item) {
      const index = this.challenges.indexOf(item)
      if(confirm('Are you sure you want to delete this Challenge?')){
        this.challenges.splice(index, 1)
        const res = await deleteChallengeByIDAPI(item.id)
        this.$vToastify.success('Deleted Successfully')
      }
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedChallenge = Object.assign({}, this.defaultChallenge)
        this.editedIndex = -1
      })
    },

    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.challenges[this.editedIndex], this.editedChallenge)
        const res = await updateChallengeByIDAPI(this.editedChallenge.id,this.editedChallenge)
        this.$vToastify.success('Edited Successfully')
      } else {
        const res = await addChallengeAPI(this.editedChallenge)
        this.editedChallenge.points = parseInt(this.editedChallenge.initial_points)
        this.editedChallenge.id = res['data']['id']
        this.challenges.push(this.editedChallenge)
        this.$vToastify.success('Added Successfully')
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
