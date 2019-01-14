<template>
  <v-content>
    <!-- <div></div> -->
    <v-snackbar v-model="show"></v-snackbar>
    <v-btn @click="test">test</v-btn>
    <v-btn @click="test1">test1</v-btn>
  </v-content>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  methods: {
    test () {
      // this.show = true
      this.$notify({
        // timeout: 1000,
        type: 'info',
        close: true,
        message: this.lorem
      })
    },
    test1 () {
      this.$Notice.open({ title: 123 })
    }
  }
}
</script>
