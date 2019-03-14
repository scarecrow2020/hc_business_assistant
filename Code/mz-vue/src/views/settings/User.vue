<template>
  <div>
    <v-card slot="main" style="width: 100%">
      <v-card-title>
        <!-- <hc-chip v-model="filterParams" :data="filterItems" @clear="filterChange"></hc-chip> -->
        <v-text-field
          class="gird-search"
          v-model="filterParams.queryName"
          append-icon="search"
          label="输入关键字"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="editPage = !editPage">新增</v-btn>
        <v-btn color="error">删除</v-btn>
      </v-card-title>
      <v-data-table
        select-all
        v-model="selectedRow"
        :headers="tableHeaders"
        :items="tableData"
        :search="filterParams.queryName"
        no-data-text="没有数据。。。"
        :pagination.sync="pagination"
        rows-per-page-text=""
      >
        <template slot="items" slot-scope="props">
          <td style="max-width:20px">
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.index + 1 }}</td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.userName }}</td>
          <td class="text-xs-right">{{ props.item.cardCode }}</td>
          <td class="text-xs-right">{{ props.item.phone }}</td>
          <td class="text-xs-right">{{ props.item.contactWay }}</td>
          <td class="text-xs-right">{{ props.item.address }}</td>
          <td class="text-xs-right">{{ props.item.email }}</td>
          <td class="text-xs-right">{{ props.item.sex }}</td>
          <td class="text-xs-right">{{ props.item.jobNumber }}</td>
          <td class="text-xs-right">{{ props.item.age }}</td>
          <td class="text-xs-right">{{ props.item.birthday }}</td>
        </template>
        <!-- <v-spacer slot="no-data" style="height:200px;text-align:center;line-height:1" class="error">aa</v-spacer> -->
        <!-- <v-flex slot="no-data">
          没有数据
        </v-flex> -->
        <!-- <div slot="actions-prepend">start</div> -->
        <template slot="pageText" slot-scope="props">
          当前条数 {{ props.pageStart }} - {{ props.pageStop }} 共 {{ props.itemsLength }} 条
        </template>
        <div slot="actions-append" style="width:100px"></div>
        <v-alert slot="no-results" :value="false" color="error" icon="warning">
          <Button type="primary">Primary</Button>
          Your search for "{{ filterParams.queryName }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
    <v-navigation-drawer
        v-model="editPage"
        right
        width="500"
        temporary
        stateless
        app
      >
      <v-layout column fill-height>
        <v-spacer></v-spacer>
        <!-- <v-layout row> -->
          <!-- <v-spacer></v-spacer> -->
          <v-btn @click="editPage = false" color="error">关闭</v-btn>
        <!-- </v-layout> -->
      </v-layout>
    </v-navigation-drawer>
  </div>
    <!-- <v-container fluid >
        <v-layout align-space-around column>
          <v-layout align-space-around column>
            user
          </v-layout>
        </v-layout>
      </v-container> -->
      <!-- <div class="bg-content">
        <v-btn color="info">新增</v-btn>
        <v-btn color="error">删除</v-btn>
        <v-layout align-space-around column>
          <v-flex xs10>
           user
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs10 class="green">
            <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div> -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const filterItems = {
  role: {
    name: '角色',
    items: [{
      id: 'set',
      name: '已设角色'
    }, {
      id: 'noSet',
      name: '未设角色'
    }, {
      id: '03',
      name: 'BOSS'
    }, {
      id: '04',
      name: '员工'
    }]
  },
  sex: {
    name: '性别',
    items: [{
      id: '0',
      name: '男'
    }, {
      id: '1',
      name: '女'
    }]
  }
}
const statisticsData = [{
  id: 'set',
  title: '已设置角色',
  value: 2
}, {
  id: 'noSet',
  title: '未设置角色',
  value: 2
}, {
  id: '03',
  title: 'BOSS',
  value: 2
}, {
  id: '04',
  title: '员工',
  value: 2
}, {
  id: 'count',
  title: '总计',
  value: 5
}]
const tableHeaders = [
  { text: '序号', value: 'index', sortable: false },
  { text: '性名', align: 'left', value: 'name', width: '300px'},
  { text: '用户名', value: 'userName' },
  { text: '身份证', value: 'cardCode' },
  { text: '电话', value: 'phone' },
  { text: '微信', value: 'contactWay' },
  { text: '地址', value: 'address' },
  { text: '邮箱', value: 'email' },
  { text: '性别', value: 'sex' },
  { text: '工号', value: 'jobNumber' },
  { text: '年龄', value: 'age', width: '30px' },
  { text: '生日', value: 'birthday' }
]
const tableData = [
  { id: 1, name: '孙悟空', userName: 'zs', phone: '123' },
  { id: 2, name: '孙行者', userName: 'zs', phone: '123' },
  { id: 3, name: '行者孙', userName: 'zs', phone: '123' },
  { id: 4, name: '者行孙', userName: 'zs', phone: '123' },
  { id: 5, name: '孙者行', userName: 'zs', phone: '123' },
  { id: 6, name: '孙悟空', userName: 'zs', phone: '123' },
  { id: 7, name: '孙行者', userName: 'zs', phone: '123' },
  { id: 8, name: '行者孙', userName: 'zs', phone: '123' },
  { id: 9, name: '者行孙', userName: 'zs', phone: '123' },
  { id: 10, name: '孙者行', userName: 'zs', phone: '1234' },
  { id: 11, name: '孙悟空', userName: 'zs', phone: '123' },
  { id: 12, name: '孙行者', userName: 'zs', phone: '123' },
  { id: 13, name: '行者孙', userName: 'zs', phone: '123' },
  { id: 14, name: '者行孙', userName: 'zs', phone: '123' },
  { id: 15, name: '孙者行', userName: 'zs', phone: '123' },
  { id: 16, name: '孙悟空', userName: 'zs', phone: '123' },
  { id: 17, name: '孙行者', userName: 'zs', phone: '123' },
  { id: 18, name: '行者孙', userName: 'zs', phone: '123' },
  { id: 19, name: '者行孙', userName: 'zs', phone: '123' },
  { id: 20, name: '孙者行', userName: 'zs', phone: '1234' },
  { id: 21, name: '孙悟空', userName: 'zs', phone: '123' },
  { id: 22, name: '孙行者', userName: 'zs', phone: '123' },
  { id: 23, name: '行者孙', userName: 'zs', phone: '123' },
  { id: 24, name: '者行孙', userName: 'zs', phone: '123' },
  { id: 25, name: '孙者行', userName: 'zs', phone: '123' },
  { id: 26, name: '孙悟空', userName: 'zs', phone: '123' },
  { id: 27, name: '孙行者', userName: 'zs', phone: '123' },
  { id: 28, name: '行者孙', userName: 'zs', phone: '123' },
  { id: 29, name: '者行孙', userName: 'zs', phone: '123' },
  { id: 30, name: '孙者行', userName: 'zs', phone: '1234' }
]

@Component({
  name: 'User'
})
export default class Home extends Vue {
  editPage: boolean = false
  filterParams: any = {
    queryName: null,
    role: [],
    sex: []
  }
  filterItems: any = filterItems
  statisticsData: any = statisticsData
  breadcrumbsItems = [{
    text: '设置',
    type: 'main'
  }, {
    text: '人员管理',
    type: 'active'
  }]
  tableHeaders = tableHeaders
  tableData = tableData
  pagination = {}
  selectedRow = []
  filterChange () {
    console.log(this.selectedRow)
    console.log(this.pagination)
    console.log(this.filterParams)
  }
  refreshStatisticsData () {
    let count = 0
    this.statisticsData.forEach((item: any, index: any) => {
      item.value = index + 1
      if (item.id === 'count') {
        item.value = count
      }
      count += item.value
    })
  }
  created () {
    this.refreshStatisticsData()
  }
}
</script>
