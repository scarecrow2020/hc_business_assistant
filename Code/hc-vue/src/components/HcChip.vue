<template>
  <div class="top-filter">
    <v-btn small color="warning" class="btn-mini" @click="clearAll" v-show="items.length > 0">清除</v-btn>
    <v-chip color="info" text-color="white" label close
      v-for="item in items" :key="item.id" @input="removeItem(item)"
    >{{item.name}}</v-chip>
  </div>
</template>
<script>
export default {
  name: 'HcChip',
  props: {
    value: {},
    data: {}
  },
  methods: {
    removeItem (item) {
      this.value[item.type].remove(item.id)
      this.clear()
    },
    clearAll () {
      Object.keys(this.value).forEach(key => {
        if (this.value[key] instanceof Array) {
          this.value[key] = []
        } else {
          this.value[key] = null
        }
      })
      this.clear()
    },
    clear () {
      this.$emit('clear')
    }
  },
  computed: {
    items () {
      let result = []
      for (let [key, value] of Object.entries(this.data)) {
        value.items.forEach(item => {
          if (this.value[key].includes(item.id)) {
            result.push({ ...item, type: key })
          }
        })
      }
      return result
    }
  }
}
</script>
