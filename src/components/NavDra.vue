<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group>
          <v-list-item router :to="{ name: 'home' }" exact>
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="!isLogin" router :to="{ name: 'login' }" exact>
            <v-list-item-icon>
              <v-icon>contact_mail</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else router :to="{ name: 'mypage' }" exact>
            <v-list-item-icon>
              <v-icon>contact_mail</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>MyPage</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon v-if="!isLogin" router :to="{ name: 'login' }" exact>
        <v-icon>login</v-icon>
      </v-btn>

      <v-menu offset-y v-if="isLogin">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item router :to="{ name: 'mypage' }" exact>
            <v-list-item-title
              ><v-icon left>face</v-icon>My Page</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title
              ><v-icon left>login</v-icon>Logout</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({ drawer: null }),
  computed: {
    ...mapGetters("login", ["isLogin"])
  },
  methods: {
    ...mapActions("login", ["logout"])
  }
};
</script>

<style></style>
