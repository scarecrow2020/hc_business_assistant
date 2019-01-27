<template>
  <v-app>
    <!-- elevation-0 -->
    <v-toolbar app dark class="bg-color">
      <v-toolbar-title class="headline ">
        <span class="f-title-big ml-2">MZ Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <v-content class="bg-img">
      <router-view></router-view>
    </v-content>
    <v-footer app dark class="bg-none f-s-14">
      <v-spacer></v-spacer>
      <span>&copy; 2019-现在  MZ商家助手 All Rights Reserved</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
