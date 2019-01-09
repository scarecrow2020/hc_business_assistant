<template>
  <v-app>
    <v-toolbar color="teal darken-1" dark>
      <v-img contain max-height="55px" max-width="100px" :src="require('@/assets/imgs/logo1.png')"></v-img>
      <v-toolbar-side-icon>
      <!-- <img src="@/assets/imgs/logo1.png" alt=""> -->
      </v-toolbar-side-icon>
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <span>All</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item"
          >
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer>abc</v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn><v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-layout align-center justify-end fill-height>
        <v-avatar :size="55">
          <img src="@/assets/imgs/head.png" alt="avatar">
        </v-avatar>
        <div class="ml-2">
          <div><strong>张三李四王五</strong></div>
          <div><strong>admin</strong></div>
        </div>
        <v-btn color="error" flat fab>
          <v-icon size="30">exit_to_app</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      items: []
    }
  }
}
</script>
