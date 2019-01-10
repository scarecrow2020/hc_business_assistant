<template>
  <v-app class="login-bgm">
    <v-toolbar color="teal darken-1" dark>
      <v-img contain max-height="55px" max-width="100px" src="@/assets/imgs/logo1.png"></v-img>
      <v-toolbar-title class="font-weight-bold display-1">HC Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center justify-end fill-height>
        <v-btn color="error" flat fab>
          <v-icon size="30">exit_to_app</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
    <v-content class="login-bgm">
      
    </v-content>
    <v-footer color="teal darken-1" app inset class="text-xs-center">
      <v-spacer><span class="white--text">HC商家助手 www.hcmanager.com Copyright &copy;2019</span></v-spacer>
    </v-footer>
  </v-app>
</template>
