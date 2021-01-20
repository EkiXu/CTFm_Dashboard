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
              Edit Category
            </div>
          </template>

          <v-data-table
            :headers="headers"
            :items="category"
            sort-by="id"
            class="elevation-1"
            style="box-shadow:none !important"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Category</v-toolbar-title>
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
                      New Category
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
                            cols="8"
                            sm="7"
                            md="8"
                          >
                            <v-text-field
                              v-model="editedCategory.name"
                              :rules="rules.nameRules"
                              label="Category Name"
                            />
                          </v-col>
                          <v-col
                            cols="4"
                          >
                            <v-text-field
                              v-model="editedCategory.icon"
                              :rules="rules.iconRules"
                              label="icon"
                              :prepend-icon="editedCategory.icon"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                          >
                            <h2 style="padding-bottom:10px">
                              Description
                            </h2>
                            <v-textarea
                              v-model="editedCategory.description"
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
            <template v-slot:item.icon="{ item }">
              <v-icon
                v-text="item.icon"
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
import moment from 'moment'
import BaseCard from '@/components/BaseCard.vue'
import { addCategoryAPI,deleteCategoryByIDAPI,updateCategoryByIDAPI,getCategoryDetailByIDAPI,getCategoryListAPI } from '@/api/category'
export default {
  components: {
    BaseCard
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
        text: 'Category',
        sortable: false,
        value: 'name'
      },
      { text: 'Challenges', value: 'challenge_amount' },
      { text: 'Icon', value:'icon'},
      { text: 'Updated_at', value: 'updated_at' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    category: [],
    editedIndex: -1,
    editedCategory: {
      id:0,
      name: '',
      description: '',
      challenge_amount:0,
      icon: 'mdi-',
      updated_at: '',
    },
    defaultCategory: {
      id:0,
      name: '',
      description: '',
      challenge_amount:0,
      icon: '',
      updated_at: '',
    },
    rules: {
        nameRules: [
          v => !!v || 'Category Name is required',
        ],
        iconRules: [v => !!v || 'Category Icon is required'],
      }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Category' : 'Edit Category'
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
      const res = await getCategoryListAPI()
      this.category = res.data
      for(let i=0 ;i< this.category.length ;i++){
        this.category[i].updated_at = moment(this.category[i].updated_at,'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    },

    async editItem (item) {
      this.editedIndex = this.category.indexOf(item)
      const res = await getCategoryDetailByIDAPI(item.id)
      this.editedCategory = Object.assign({}, res['data'])
      this.dialog = true
    },

    async deleteItem (item) {
      const index = this.category.indexOf(item)
      confirm('Are you sure you want to delete this Category?') && this.category.splice(index, 1)
      const res = await deleteCategoryByIDAPI(item.id)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedCategory = Object.assign({}, this.defaultCategory)
        this.editedIndex = -1
      })
    },

    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.category[this.editedIndex], this.editedCategory)
        const res = await updateCategoryByIDAPI(this.editedCategory.id,this.editedCategory)
      } else {
        const res = await addCategoryAPI(this.editedCategory)
        this.editedCategory.id = res['data']['id']
        this.category.push(this.editedCategory)
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
