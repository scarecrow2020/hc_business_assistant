<template>
  <v-app>
    <v-toolbar color="teal darken-1" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
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
        <img class="head-img" src="@/assets/imgs/head.png">
        <v-btn color="error" small round>
          admin
          <v-icon right>arrow_back</v-icon>
        </v-btn>
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
