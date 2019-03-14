<template>
  <v-app>test page
    <mz-table :items="tableData" :headers="tableHeaders"></mz-table>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const tableHeaders = [
  { text: '序号', value: 'index', sortable: false },
  { text: '性名', align: 'left', value: 'name', width: '300px', class: 'green--text' },
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

@Component({
  name: 'Test'
})
export default class Test extends Vue {
  tableData: Array<Object> = tableData
  tableHeaders: Array<Object> = tableHeaders
}
</script>
