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
              Edit Users
            </div>
          </template>

          <v-data-table
            :headers="headers"
            :items="users"
            sort-by="id"
            class="elevation-1"
            style="box-shadow:none !important"
            :loading="is_loading"
            loading-text="Loading... Please wait"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Users</v-toolbar-title>
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
                      New User
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
                          >
                            <v-text-field
                              v-model="editedUser.email"
                              label="Email"
                              prepend-icon="mdi-email"
                              :rules="rules.emailRules"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="6"
                          >
                            <v-text-field
                              v-model="editedUser.username"
                              label="Username"
                              prepend-icon="mdi-account"
                              :rules="rules.usernameRules"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="6"
                          >
                            <v-text-field
                              v-model="editedUser.nickname"
                              label="NickName"
                              prepend-icon="mdi-account-outline"
                              :rules="rules.nicknameRules"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                          >
                            <v-text-field
                              v-model="editedUser.new_password"
                              label="New Password"
                              prepend-icon="mdi-lock"
                              type="password"
                              :rules="rules.passwordRules"
                            />
                          </v-col>
                          <v-col cols="4">
                            <v-switch
                              v-model="editedUser.is_staff"
                              label="Admin Account"
                            />
                          </v-col>
                          <v-col cols="4">
                            <v-switch
                              v-model="editedUser.is_hidden"
                              label="Hidden Account"
                            />
                          </v-col>
                          <v-col cols="4">
                            <v-switch
                              v-model="editedUser.is_verified"
                              label="Verified Account"
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
            <template v-slot:item.is_verified="{ item }">
              <v-simple-checkbox
                v-model="item.is_verified"
                disabled
              />
            </template>
            <template v-slot:item.is_staff="{ item }">
              <v-simple-checkbox
                v-model="item.is_staff"
                disabled
              />
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
import { addUserAPI,deleteUserByIDAPI,updateUserByIDAPI,getUserByIDAPI,getUserListAPI } from '@/api/user'
export default {
  components: {
    BaseCard,
  },
  data: () => ({
    dialog: false,
    is_loading:true,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id'
      },
      {
        text: 'Username',
        sortable: false,
        value: 'username'
      },
      { text: 'Nickname', value: 'nickname' },
      { text: 'Solved', value: 'solved_amount' },
      { text: 'Points', value: 'points' },
      { text: 'IsAdmin', value: 'is_staff' },
      { text: 'IsVerified', value:'is_verified'},
      { text: 'IsHidden', value: 'is_hidden' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    users: [],
    editedIndex: -1,
    editedUser: {
      id:0,
      email:'',
      username: '',
      nickname: '',
      new_password:'',
      solved_amount: '',
      points: 0,
      is_staff: false,
      is_hidden: true,
      is_verified:false,
    },
    defaultUser: {
      id:0,
      username: '',
      nickname: '',
      solved_amount: '',
      points: 0,
      is_staff: false,
      is_hidden: true,
    },    
    rules: {
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 3) || 'name must be more than 4 characters',
        v => (v && v.length <= 16) || 'name must be less than 16 characters',
        v => /^[a-zA-Z0-9_-]{3,16}$/.test(v) ||  'Username must be valid'
      ],
      nicknameRules: [
        v => !!v || 'NickName is required',
        v => (v && v.length >= 3) || 'name must be more than 4 characters',
        v => (v && v.length <= 16) || 'name must be less than 16 characters',
        v => /^[a-zA-Z0-9_-]{3,16}$/.test(v) ||  'Nickname must be valid'
      ],
      passwordRules: [
        v => (v && v.length >= 8) || 'Password must be more than 8 characters'
      ]
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New User' : 'Edit User'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  async created () {
    this.initialize()
    this.is_loading = false
  },

  methods: {
    async initialize () {
      const res = await getUserListAPI()
      this.users = res['data']
    },

    async editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      const res = await getUserByIDAPI(item.id)
      this.editedUser = Object.assign({}, res['data'])
      this.dialog = true
    },

    async deleteItem (item) {
      const index = this.users.indexOf(item)
      if(confirm('Are you sure you want to delete this User?') ){
        this.users.splice(index, 1)
        const res = await deleteUserByIDAPI(item.id)
        this.$vToastify.success('Deleted Successfully')
      }
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedUser = Object.assign({}, this.defaultUser)
        this.editedIndex = -1
      })
    },

    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedUser)
        const res = await updateUserByIDAPI(this.editedUser.id,this.editedUser)
        this.$vToastify.success('Edited Successfully')
      } else {
        console.log(this.editedUser)
        const res = await addUserAPI(this.editedUser)
        this.$vToastify.success('Added Successfully')
        this.editedUser.id = res['data']['id']
        this.users.push(this.editedUser)
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
