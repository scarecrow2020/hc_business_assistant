<template>
  <hc-list :breadcrumbs-items="breadcrumbsItems">
    <hc-filter slot="left" v-model="filterParams" :data="filterItems" @filter-change="filterChange"></hc-filter>
    <v-layout slot="top">
      <v-layout column>
        <hc-chip v-model="filterParams" :data="filterItems" @clear="filterChange"></hc-chip>
        <v-layout>
          <v-layout column class="hc-table"
            v-for="(item, index) in statisticsData" :key="index">
            <div class="f-title hc-col">{{item.title}}</div>
            <v-divider></v-divider>
            <div class="body-2 hc-col">{{item.value}}</div>
          </v-layout>
        </v-layout>
        <v-layout align-end class="btn-group">
          <v-btn color="info">添加人员</v-btn>
          <v-btn color="error">删除人员</v-btn>
        </v-layout>
      </v-layout>
      <v-layout style="max-width:30%">
      </v-layout>
    </v-layout>
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
      }]
    }
  },
  methods: {
    filterChange () {
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
