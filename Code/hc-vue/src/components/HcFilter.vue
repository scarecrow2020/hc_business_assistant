<template>
  <v-layout column class="filter">
    <div class="hc-title">筛选</div>
    <v-text-field placeholder="请输入关键字" class="search" autofocus hide-details
      prepend-inner-icon="search" @click:prepend-inner="search" clearable dont-fill-mask-blanks
      @keydown.13="search()" v-model="value.queryName" @click:clear="search">
    </v-text-field>
    <v-layout column>
      <v-layout class="filter-items" v-for="(filter, key) in data" :key="key">
        <div class="hc-title filter-item-title"><span>{{filter.name}}</span></div>
        <div>
          <a :class="['filter-item', { 'is-active': value[key].includes(item.id) }]"
            v-for="item in filter.items" :key="item.id" @click="clickItem(key, item.id)"
          >
            {{item.name}}
          </a>
          <v-btn round small color="warning" class="btn-mini" @click="clearSelected(key)">清除</v-btn>
        </div>
      </v-layout>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  name: 'HcFilter',
  props: {
    value: {},
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    search () {
      this.$emit('filter-change')
    },
    clickItem (key, value) {
      let itemIds = this.value[key] || []
      if (itemIds.includes(value)) {
        itemIds = itemIds.filter(option => option !== value)
      } else {
        itemIds.push(value)
      }
      this.value[key] = itemIds
      this.search()
    },
    clearSelected (key) {
      this.value[key] = []
      this.search()
    }
  }
}
</script>
