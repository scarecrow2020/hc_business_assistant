<template>
  <!-- <v-app> -->
    <router-view></router-view>
    <!-- elevation-0 -->
    <!-- <v-toolbar app dark class="bg-color">
      <v-toolbar-title class="headline ">
        <span class="f-title-big ml-2">MZ Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center justify-end fill-height>
        <v-avatar :size="55">
          <img src="@/assets/imgs/head.png" alt="avatar">
        </v-avatar>
        <div class="ml-2 text-xs-center">
          <p><strong>admin</strong></p>
          <p><strong>张三李四王五</strong></p>
        </div>
        <v-btn color="error" flat fab @click="logout">
          <v-icon size="30">exit_to_app</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
    <v-content class="bg-img">
      <router-view></router-view>
    </v-content>
    <v-footer app dark class="bg-none f-s-14">
      <v-spacer></v-spacer>
      <span>&copy; 2019-现在  MZ商家助手 All Rights Reserved</span>
      <v-spacer></v-spacer>
    </v-footer> -->
  <!-- </v-app> -->
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
