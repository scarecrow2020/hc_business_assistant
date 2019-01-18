<template>
  <v-layout>
    <v-layout class="list-left" style="max-width:20%">1</v-layout>
    <v-layout column>
      <v-layout class="list-top" style="max-height:20%">2</v-layout>
      <v-layout>
        <v-layout>3</v-layout>
        <v-layout class="list-right" style="max-width:30%">4</v-layout>
      </v-layout>
    </v-layout>
    <!-- <v-layout class="red" :style="{ width: size.leftWidth }">
      <v-flex>
        left
      </v-flex>
    </v-layout>
    <v-layout column class="blue" style="width:80%">
      <v-layout style="height: 20%; width:100%" class="yellow">top</v-layout>
      <v-layout style="height: 80%;width:100%" class="pink">
        <v-layout style="width:50%" class="green">center</v-layout>
        <v-layout>right</v-layout>
      </v-layout>
    </v-layout> -->
  </v-layout>
</template>

<script>
export default {
  props: {
    size: {
      default () {
        return {
          leftWidth: '20%'
        }
      }
    }
  },
  data () {
    return {}
  }
}
</script>
