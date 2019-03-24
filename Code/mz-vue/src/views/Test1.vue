<template>
  <v-app>test1 page {{id}}
    <input :value="test" @input="handler" />
    {{ test }} {{html}} {{ boolean1 }}{{ aa }}{{ obj }}
    <input v-model.number="obj.age" type="number">
    <v-btn @click.exact="boolean1 = !boolean1; aa = 'ls'">Test</v-btn>
    <!-- []中不能含有空格及引号 -->
    <span v-html="html" :[boolean1+aa]="boolean1"></span>
    <todo-item :todo="{ text: 'test', bb: 12 }"></todo-item>
    <mz-test :test-props="{ id: 2, name: 'test' }"></mz-test>
    <li v-for="item in items" :key="item.id">{{ item }}</li>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

Vue.component('mz-test', {
  props: {
    testProps: {
      default () {
        return { id: 1 }
      }
    }
  },
  template: '<span>{{ testProps }}</span>'
})
@Component({
  name: 'Test1'
})
export default class Test1 extends Vue {
  @Prop() id!: number
  obj = {
    age: 123
  }
  items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  boolean1 = true
  aa = 'zs'
  // v-html 中不能使用{{}}
  html = '<span style="color: red">{{test}}</span>'
  test: string = 'test'
  handler ($event: any) { this.test = $event.target.value }
  created () {
    console.log(this.$route.params)
  }
}

</script>
