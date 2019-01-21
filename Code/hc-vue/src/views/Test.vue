<template>
  <Layout class="fill-height bgc-login">
    <Header class="teal">Header</Header>
    <Content>
    </Content>
    <Footer class="align-center bgc-none f-white">&copy;2019 Copyright HC商家助手 www.hcmanager.com</Footer>
  </Layout>
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
