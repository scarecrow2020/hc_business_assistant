<template>
<v-card>
    <v-card-title>
      Nutrition {{total}}
      <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      select-all
      :headers="headers"
      :items="tableData"
      no-data-text="没有数据。。。"
      no-results-text="没有搜索到数据"
      :pagination.sync="pagination"
      :loading="loading"
      :expand="expand"
      :search="search"
      :rows-per-page-items="[2, 4]"
      rows-per-page-text=""
      :hide-actions="false"
      :total-items="total"
    >
      <template v-slot:headers="props">
        <tr>
          <th>
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
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
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
          <td style="max-width:20px">
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
            <v-icon
              small
              class="mr-2"
            >
              edit
            </v-icon>
            <v-icon
              small
            >
              delete
            </v-icon>
          </td>
        </tr>
      </template>
      <!-- <v-spacer slot="no-data" style="height:200px;text-align:center;line-height:1" class="error">aa</v-spacer> -->
      <!-- <v-flex slot="no-data">
        没有数据
      </v-flex> -->
      <!-- <div slot="actions-prepend">start</div> -->
      <template v-slot:pageText="props">
        {{props}}当前条数 {{ props.pageStart }} - {{ props.pageStop }} 共 {{ props.itemsLength }} 条
      </template>
      <div slot="actions-append">actions-append</div>
      <div slot="actions-prepend">actions-prepend</div>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
      <!-- <v-alert slot="no-results" :value="false" color="error" icon="warning">
        <Button type="primary">Primary</Button>
        Your search for "111" found no results.
      </v-alert> -->
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
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({
  name: 'MzTable'
})
export default class MzTable extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly items!: Array<object>
  @Prop({ type: Array, default: () => [] }) readonly headers!: Array<object>
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
  search = null
  loading = false
  expand = false
  pagination: any = {
    // sortBy: 'name'
    // descending: false,
    // page: 1,
    // rowsPerPage: 2,
    // totalItems: 5
  }
  total = 0
  tableData: any = []

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

      setTimeout(() => {
        this.loading = false
        resolve({
          items,
          total
        })
      }, 1000)
    })
  }

  created () {
    // this.tableData = [
    //   { id: 26, name: 'ZZZ', age: '123' },
    //   { id: 27, name: '孙行者', age: '123' },
    //   { id: 28, name: '行者孙', age: '123' },
    //   { id: 29, name: '者行孙', age: '123' },
    //   { id: 30, name: '孙悟空', age: '1234' }
    // ]
    // this.total = 10
    // console.log(this.items)
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
    return [
         { id: 26, name: 'ZZZ', age: '123' },
      { id: 27, name: '孙行者', age: '123' },
      { id: 28, name: '行者孙', age: '123' },
      { id: 29, name: '者行孙', age: '123' },
      { id: 30, name: '孙悟空', age: '1234' }
    ]
  }
}
</script>
