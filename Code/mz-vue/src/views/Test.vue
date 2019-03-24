<template>
  <v-app>test page
    <input :value="test" @input="handler" />
    {{ test }} {{html}}
    <!-- <todo-item1 v-bind.sync="a">
      默认slot的值
      <template #one="slotProps">
        <span>slot1{{slotProps}}</span>
      </template>
      <template v-slot:two>
        <span>slot2</span>
      </template>
    </todo-item1> -->
    <v-btn @click="testMethod">{{a.c}}</v-btn>
    <!-- <todo-item :todo-item="a.todo"></todo-item> -->
    <!-- <base-checkbox v-model="a.c"></base-checkbox> -->
    <render-component message="s-msg" a="a" b="b">
      <template #default="{text}">{{text}}</template>
    </render-component>
    <!-- <v-card class="elevation-0">
      <v-card-title>
        Nutrition
        <v-divider
            class="mx-2"
            inset
            vertical
          ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="tableParams.search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card> -->
    <!-- <mz-table :items="tableData" :headers="tableHeaders" :params="tableParams"></mz-table> -->
  </v-app>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

import { mixins } from 'vue-class-component'
import $axios from '../plugins/axios'
import test1 from './Test1.vue'
import Test1 from './Test1.vue';
const tableHeaders = [
  { text: '序号', value: 'index', sortable: false },
  { text: '性名', align: 'center', value: 'name', width: '300px', class: 'green--text' },
  { text: 'aa', value: 'phone' },
  { text: '地址', value: 'address' },
  { text: '邮箱', value: 'email' },
  { text: '性别', value: 'sex' },
  { text: '年龄', value: 'age', width: '30px' },
  { text: '编辑' }
]
const tableData = [
  { id: 1, name: 'AAA', age: '123' },
  { id: 2, name: 'CCC', age: '1' },
  { id: 3, name: 'BBB', age: '123' },
  { id: 4, name: 'DDD', age: '123' },
  { id: 5, name: 'EEE', age: '123' },
  { id: 6, name: 'FFF', age: '123' },
  { id: 7, name: 'GGG', age: '123' },
  { id: 8, name: 'HHH', age: '123' },
  { id: 9, name: 'III', age: '123' },
  { id: 10, name: 'JJJ', age: '1234' },
  { id: 11, name: 'KKK', age: '123' },
  { id: 12, name: 'LLL', age: '123' },
  { id: 13, name: 'MMM', age: '123' },
  { id: 14, name: 'NNN', age: '123' },
  { id: 15, name: 'OOO', age: '123' },
  { id: 16, name: 'PPP', age: '123' },
  { id: 17, name: 'QQQ', age: '123' },
  { id: 18, name: 'RRR', age: '123' },
  { id: 19, name: 'SSS', age: '123' },
  { id: 20, name: 'TTT', age: '1234' },
  { id: 21, name: 'UUU', age: '123' },
  { id: 22, name: 'VVV', age: '123' },
  { id: 23, name: 'WWW', age: '123' },
  { id: 24, name: 'XXX', age: '123' },
  { id: 25, name: 'YYY', age: '123' },
  { id: 26, name: 'ZZZ', age: '123' },
  { id: 27, name: '孙行者', age: '123' },
  { id: 28, name: '行者孙', age: '123' },
  { id: 29, name: '者行孙', age: '123' },
  { id: 30, name: '孙悟空', age: '1234' }
]
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
  `
})

const aa = Vue.extend({
  data () {
    return {
      bbba: 'bbba'
    }
  }
})

@Component({
  name: 'Test'
})
export default class Test extends mixins(aa) {
  @Provide('cc') testProvide = 'testProvide'
  @Provide('provideMethod') provideMethod () { console.log('test method handler') }

  tableData: Array<Object> = tableData
  tableHeaders: Array<Object> = tableHeaders
  tableParams = {
    search: null
  }
  boolean1 = false
  // v-html 中不能使用{{}}
  html = '<span style="color: red">{{test}}</span>'
  test: string = 'test'
  handler ($event: any) {
    this.test = $event.target.value
    console.log($event)
  }
  a = {
    todo: { text: 'todo item 1', bb: 24 },
    a: 1,
    b: 'b',
    c: true,
    name: 'zs'
  }
  testMethod ($event: any) {
    this.a.c = !this.a.c
    this.$nextTick(() => {
      console.log($event.target.innerText)
    })
  }
  created () {
    // console.log(this.bbba)
    // $axios.post('/test/helloWorld1', {
    //   // params: {
    //     // a: [1, 2]
    //     a: {
    //       a: 'a',
    //       b: 'b'
    //     }
    //   // }
    // }).then((response:any) => {
    //   console.log(response)
    // })
  }
}

</script>
