<template>
  <!-- <v-app id="inspire">
    <mz-table1 :items="tableData" :headers="tableHeaders"></mz-table1>
  </v-app> -->
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

  totalDesserts= 0
  desserts= []
  loading= true
  pagination: any= {}
  headers= [
    {
      text: 'Dessert (100g serving)',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' }
  ]

  mounted () {
    this.getDataFromApi()
      .then((data: any) => {
        this.desserts = data.items
        this.totalDesserts = data.total
      })
  }
  getDataFromApi () {
      this.loading = true
      return new Promise((resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        let items = this.getDesserts()
        const total = items.length

        if (this.pagination.sortBy) {
          items = items.sort((a: any, b: any) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (rowsPerPage > 0) {
          items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
          this.loading = false
          resolve({
            items,
            total
          })
        }, 1000)
      })
    }
    getDesserts () {
      return [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
}
</script>
