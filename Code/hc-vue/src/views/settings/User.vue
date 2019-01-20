<template>
  <hc-list :breadcrumbs-items="breadcrumbsItems">
    <hc-filter slot="left" v-model="filterParams" :data="filterItems" @filter-change="filterChange"></hc-filter>
    <v-layout slot="top">
      <v-layout column>
        <v-layout>
          <v-layout column class="hc-table"
            v-for="(item, index) in statisticsData" :key="index">
            <div class="f-title hc-col">{{item.title}}</div>
            <v-divider></v-divider>
            <div class="body-2 hc-col">{{item.value}}</div>
          </v-layout>
        </v-layout>
        <!-- <hc-chip v-model="filterParams" :data="filterItems" @clear="filterChange"></hc-chip> -->
        <v-layout align-end class="btn-group">
          <v-btn color="info">添加人员</v-btn>
          <v-btn color="error">删除人员</v-btn>
        </v-layout>
      </v-layout>
      <v-layout style="flex: 0 0 auto;width:30%">
      </v-layout>
    </v-layout>
    <v-card slot="main" style="width: 100%">
      <v-card-title>
        <hc-chip v-model="filterParams" :data="filterItems" @clear="filterChange"></hc-chip>
        <v-spacer></v-spacer>
        <v-text-field
          style="max-width:30%"
          v-model="filterParams.queryName"
          append-icon="search"
          label="输入关键字"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <!-- <div slot="main" style="height:100%;width:100%"> -->
      <v-data-table
        select-all
        :headers="tableHeaders"
        :items="tableData"
        :search="filterParams.queryName"
        no-data-text="没有数据。。。"
        :pagination.sync="pagination"
        rows-per-page-text="123"
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
          <td class="text-xs-right">{{ props.item.address }}</td>
          <td class="text-xs-right">{{ props.item.address }}</td>
          <td class="text-xs-right">{{ props.item.address }}</td>
          <td class="text-xs-right">{{ props.item.address }}</td>
          <td class="text-xs-right">{{ props.item.address }}</td>
        </template>
        <v-flex slot="no-data">no data</v-flex>
        <v-flex slot="actions-prepend">start</v-flex>
        <v-alert slot="no-results" :value="false" color="error" icon="warning">
          Your search for "{{ filterParams.queryName }}" found no results.
        </v-alert>
        <div slot="actions-append">end</div>
      </v-data-table>
      <!-- </div> -->
    </v-card>
  </hc-list>
  <!-- <v-layout>
    <v-layout column class="list-left" style="max-width:20%">
      <v-breadcrumbs :items="titles">
        <template slot="item" slot-scope="props">
          <v-breadcrumbs-item>
            <span :class="props.item.class">{{props.item.text}}</span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <hc-filter v-model="filterParams" :data="filterItems" @filter-change="filterChange"></hc-filter>
    </v-layout>
    <v-layout column>
      <v-layout class="list-top" style="max-height:20%">2</v-layout>
      <v-layout>
        <v-layout>3</v-layout>
        <v-layout class="list-right" style="max-width:30%">4</v-layout>
      </v-layout>
    </v-layout>
  </v-layout> -->
</template>

<script>
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
  { text: '序号' },
  { text: '性名', align: 'left', sortable: false, value: 'name', width: '300px' },
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
  { name: '孙悟空', userName: 'zs', phone: '123' },
  { name: '孙行者', userName: 'zs', phone: '123' },
  { name: '行者孙', userName: 'zs', phone: '123' },
  { name: '者行孙', userName: 'zs', phone: '123' },
  { name: '孙者行', userName: 'zs', phone: '123' },
  { name: '孙悟空', userName: 'zs', phone: '123' },
  { name: '孙行者', userName: 'zs', phone: '123' },
  { name: '行者孙', userName: 'zs', phone: '123' },
  { name: '者行孙', userName: 'zs', phone: '123' },
  { name: '孙者行', userName: 'zs', phone: '1234' }
]
export default {
  props: {
    size: {
      default () {
        return {
          leftWidth: '20%'
        }
      }
    }
  },
  data () {
    return {
      filterParams: {
        queryName: null,
        role: [],
        sex: []
      },
      filterItems: filterItems,
      statisticsData: statisticsData,
      breadcrumbsItems: [{
        text: '设置',
        type: 'main'
      }, {
        text: '人员管理',
        type: 'active'
      }],
      tableHeaders: tableHeaders,
      tableData: tableData,
      pagination: {}
    }
  },
  methods: {
    filterChange () {
      console.log(this.pagination)
      console.log(this.filterParams)
    },
    refreshStatisticsData () {
      let count = 0
      this.statisticsData.forEach((item, index) => {
        item.value = index + 1
        if (item.id === 'count') {
          item.value = count
        }
        count += item.value
      })
    }
  },
  created () {
    this.refreshStatisticsData()
  }
}
</script>
