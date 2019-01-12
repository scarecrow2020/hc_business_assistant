<template>
  <v-app class="bg-color">
    <v-btn @click="test">test</v-btn>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  methods: {
    test () {
      this.$notify({
        timeout: 1000,
        type: 'info',
        close: true,
        message: this.lorem
      })
    }
  }
}
</script>
