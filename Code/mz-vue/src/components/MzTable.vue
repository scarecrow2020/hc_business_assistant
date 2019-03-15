<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="tableData"
    no-data-text="没有数据。。。"
    no-results-text="没有搜索结果。。。"
    :pagination.sync="pagination"
    :rows-per-page-items="rowsPerPageItems"
    rows-per-page-text=""
    :hide-actions="hidePagination"
    :loading="loading"
    :expand="expand"
  >
    <template v-slot:headers="props">
      <tr>
        <th style="width:20px" v-if="!hideSelect">
          <v-checkbox
            :input-value="props.all"
            :indeterminate="props.indeterminate"
            primary
            hide-details
            @click.stop="toggleAll"
          ></v-checkbox>
        </th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '', `text-xs-${header.align || 'right'}`]"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">
                {{ header.text }}
              </span>
            </template>
            <span>
              {{ header.text }}
            </span>
          </v-tooltip> -->
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td v-if="!hideSelect">
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.index + 1 }}</td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.phone }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.sex }}</td>
        <td class="text-xs-right">{{ props.item.age }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2">edit</v-icon>
          <v-icon small>delete</v-icon>
        </td>
      </tr>
    </template>
    <!-- <v-flex slot="no-data">没有数据</v-flex> -->
    <template v-slot:pageText="props">
      123
      <!-- {{props}}当前条数 {{ props.pageStart }} - {{ props.pageStop }} 共 {{ props.itemsLength }} 条 -->
    </template>
    <div slot="actions-append">actions-append</div>
    <div slot="actions-prepend">actions-prepend</div>
    <template v-slot:expand="props">
      <v-card flat>
        <v-card-text>Peek-a-boo!</v-card-text>
      </v-card>
    </template>
    <template v-slot:footer>
      <td :colspan="headers.length + 1">
        <strong>This is an extra footer</strong>
      </td>
    </template>
  </v-data-table>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

interface Pagination {
    sortBy: string
    descending: boolean
    page: number
    rowsPerPage: number
    totalItems: number
}


@Component({
  name: 'MzTable'
})
export default class MzTable extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly items!: Array<object>
  @Prop({ type: Array, default: () => [] }) readonly headers!: Array<object>
  @Prop({ type: Object, default: () => {} }) readonly params!: any
  @Prop({ type: String, default: null }) readonly url!: String
  @Prop({ type: Boolean, default: false }) readonly hidePagination!: boolean
  @Prop({ type: Boolean, default: false }) readonly hideSelect!: boolean

  tableData: Array<object> = []

  rowsPerPageItems: Array<number> = [2 , 20, 30]
  pagination: Pagination = {
    sortBy: 'name',
    descending: false,
    page: 1,
    rowsPerPage: 2,
    totalItems: 0
  }



  selected: Array<object> = []
  toggleAll () {
    if (this.selected.length) this.selected = []
    else this.selected = this.items.slice()
    console.log(this.selected)
  }

  changeSort (column: string) {
    if (this.pagination.sortBy === column) {
      this.pagination.descending = !this.pagination.descending
    } else {
      this.pagination.sortBy = column
      this.pagination.descending = false
    }
  }
  loading = false
  expand = false
  
  total = 0

  mounted () {
    // this.tableData = [
    //   { id: 26, name: 'ZZZ', age: '123' },
    //   { id: 27, name: '孙行者', age: '123' },
    //   { id: 28, name: '行者孙', age: '123' },
    //   { id: 29, name: '者行孙', age: '123' },
    //   { id: 30, name: '孙悟空', age: '1234' }
    // ]
    // this.total = 10
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
      // this.pagination.totalItems = total
      setTimeout(() => {
        this.loading = false
        resolve({
          items,
          total
        })
      }, 1000)
    })
  }

  loadData () {
    if (this.url) {
      
    } else {
      this.tableData = this.items
    }
    console.log(this.pagination, this.params, this.url)
  }

  created () {
    // console.log(this.items)
    this.loadData()
  }

  @Watch('pagination', { deep: true })
  onPaginationChange(val: any, oldVal: any) {
    console.log(val, oldVal)
    this.getDataFromApi()
      .then((data: any) => {
        this.tableData = data.items
        this.total = data.total
      })
  }

  getDesserts () {
    let items = [
         { id: 26, name: 'ZZZ', age: '123' },
      { id: 27, name: '孙行者', age: '123' },
      { id: 28, name: '行者孙', age: '123' },
      { id: 29, name: '者行孙', age: '123' },
      { id: 30, name: '孙悟空', age: '1234' }
    ]
    if (this.params.search) {
      // console.log(items.filter(item => item.name.indexOf(this.search) > -1))
      return items.filter(item => item.name.indexOf(this.params.search) > -1)
    }
    return items
  }

  filter(item: object, search: string) {
    console.log(item, search)
  }
}
</script>
