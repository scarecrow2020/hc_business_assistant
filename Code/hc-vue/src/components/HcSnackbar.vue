<template>
  <v-snackbar right top :vertical="params.vertical" auto-height
    :value="value.show" :timeout="params.timeout" :color="params.type">
    {{ params.message }}
    <v-btn flat @click="close" v-if="params.close">
      <v-icon size="30">cancel</v-icon>
    </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  name: 'HcSnackbar',
  props: {
    value: null
  },
  data () {
    return {}
  },
  methods: {
    close () {
      this.value.show = false
    }
  },
  computed: {
    params () {
      let [messages, type = 'error'] = [{
        error: '操作失败',
        success: '操作成功'
      }, this.value.type]
      let message = messages[type]
      return {
        timeout: 3000,
        close: false,
        title: null,
        message,
        type,
        ...this.value
      }
    }
  }
}
</script>
