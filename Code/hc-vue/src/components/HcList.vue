<template>
  <v-layout class="hc-list">
    <v-layout column class="list-left" style="flex: 0 0 auto;width:20%">
      <v-breadcrumbs :items="breadcrumbsItems">
        <template slot="item" slot-scope="props">
          <v-breadcrumbs-item>
            <span :class="['font-weight-bold',{'f-black': props.item.type !== 'active'}, props.item.type === 'main' ? 'title' : 'subheading']">{{props.item.text}}</span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <slot name="left"></slot>
    </v-layout>
    <v-layout column>
      <v-layout class="list-top">
        <slot name="top"></slot>
      </v-layout>
      <v-layout>
        <v-layout>
          <slot name="main"></slot>
        </v-layout>
        <v-layout class="list-right" :style="{ width: layoutSize.rightWidth }">
          <slot name="right"></slot>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  name: 'HcList',
  props: {
    breadcrumbsItems: {
      type: Array,
      default () {
        return []
      }
    },
    layoutSize: {
      type: Object,
      default () {
        return {
          rightWidth: '0%'
        }
      }
    }
  }
}
</script>
