<template>
  <v-app>
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
    <v-content class="bg-color">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-left>
            <h2 class="display-3">Fast, comprehensive and efficient! <br/>Welcome to the business assistant.</h2>
          </v-flex>
        <v-flex text-xs-left>
            <h2 class="display-3">Fast, comprehensive and efficient! <br/>Welcome to the business assistant.</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer inset class="text-xs-center">
      <v-spacer><span class="white--text">HC商家助手 www.hcmanager.com Copyright &copy;2019</span></v-spacer>
    </v-footer>
  </v-app>
</template>
