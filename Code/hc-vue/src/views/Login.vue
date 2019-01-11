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
      <v-container fill-height fluid pb-0>
        <v-layout column wrap>
          <v-layout row>
            <v-layout column align-center justify-center>
              <v-flex text-xs-center shrink>
                <h2 class="display-2">快捷更高效<br/><br/>欢迎使用HC商家助手</h2>
              </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
            </v-layout>
          </v-layout>
          <v-footer class="text-xs-center bg-none">
            <v-spacer><span class="white--text">&copy;2019 Copyright HC商家助手 www.hcmanager.com</span></v-spacer>
          </v-footer>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
