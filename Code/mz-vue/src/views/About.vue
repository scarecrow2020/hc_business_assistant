<template>
  <v-app>
    <v-btn color="info" @click="drawer = !drawer">123</v-btn>
    <div>this is test page</div>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        width="500"
        temporary
      >
    </v-navigation-drawer>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'About'
})
export default class About extends Vue {
  drawer: boolean = false
}
</script>
