<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :pagination.sync="pagination"
    :total-items="totalDesserts"
    :loading="loading"
    class="elevation-1"
    v-model="selected"
    select-all
    no-data-text="没有数据。。。"
    no-results-text="没有搜索到数据"
    :expand="expand"
    :search="search"
    :rows-per-page-items="[2, 4]"
    rows-per-page-text=""
    :hide-actions="false"
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
    <template v-slot:pageText="props">
        {{props}}当前条数 {{ props.pageStart }} - {{ props.pageStop }} 共 {{ props.itemsLength }} 条
      </template>
      <!-- <v-flex slot="no-data">
        没有数据
      </v-flex> -->
      <div slot="actions-append">actions-append</div>
      <div slot="actions-prepend">actions-prepend</div>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
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

@Component({
  name: 'MzTable1'
})
export default class MzTable1 extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly items!: Array<object>
  @Prop({ type: Array, default: () => [] }) readonly headers!: Array<object>
  totalDesserts= 0
  desserts= []
  loading= true
  pagination: any= {}
search = ''
selected: Array<object> = []
  expand = false
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
    }
  @Watch('pagination', { deep: true })
  onPaginationChange(val: any, oldVal: any) {
    this.getDataFromApi()
      .then((data: any) => {
        this.desserts = data.items
        this.totalDesserts = data.total
      })
  }
}
</script>
