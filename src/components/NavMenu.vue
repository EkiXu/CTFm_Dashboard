<template>
  <div>
    <v-app-bar
      app
      height="56px"
      class="nav"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="toolbar-title">
        <!--<v-breadcrumbs :items="breadList"></v-breadcrumbs>-->
      </v-toolbar-title>
      <v-spacer />
      <template v-if="accessToken === null">
        <v-btn
          text
          to="/login"
        >
          Login
        </v-btn>
      </template>
      <template v-else>
        <v-menu
          left
          open-on-hover
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              style="text-transform: unset;"
            >
              {{ userInfo.nickname }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              link
              to="/profile"
            >
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="drawer"
      app
    >
      <router-link to="/">
        <div class="drawer_header">
          <h1 class="font-weight-light">
            CTFm Dashboard
          </h1>
        </div>
      </router-link>
      <v-list>
        <v-list-item
          link
          to="/contest"
        >
          <v-list-item-action>
            <v-icon>mdi-sword-cross</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contest</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/category"
        >
          <v-list-item-action>
            <v-icon>mdi-tag</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Category</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/challenge"
        >
          <v-list-item-action>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Challenges</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/notification"
        >
          <v-list-item-action>
            <v-icon>mdi-bell</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/user"
        >
          <v-list-item-action>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>User</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavMenu',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    dropdown_menu: ['Profile', 'Logout'],
    isLoggedIn: false,
  }),
  computed: {
    ...mapGetters('user', ['accessToken','userInfo'])
  },
  created () {
  },
  methods: {
    ...mapActions('user', ['Logout']),
    isHome (route) {
      return route.name === 'home'
    }
  }
}
</script>

<style lang="scss">
.nav{
  &:before
  {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: #fff;
    z-index: -1;
  }
  &:after
  {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: #fff;
    z-index: -2;
    filter: blur(16px);
  }
  &:before,
  &:after
  {
    background: #00bcd4
  }
}
.drawer{
  a{
    text-decoration: none;
    color: #fff !important;
  }
  .drawer_header{
    margin: 0;
    height: 56px;
    background: #03a9be;
    h1 {
      text-align: center;
      padding: 8px;
    }
  }
}
</style>
