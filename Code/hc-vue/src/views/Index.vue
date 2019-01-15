<template>
  <v-content>
    <v-toolbar color="teal darken-1" dark>
      <!-- <v-img contain max-height="55px" max-width="100px" src="@/assets/imgs/logo1.png"></v-img> -->
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title class="font-weight-bold display-1">HC Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="menu in menus" :key="menu.id"
          flat exact-active-class="teal lighten-1" :to="menu.path"
        >
          {{menu.name}}
        </v-btn>
        <v-menu offset-y>
        <v-btn
          slot="activator"
          color="primary"
          dark
        >
          Dropdown
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, index) in menus[1].subNavs"
            :key="index"
          >
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      </v-toolbar-items>
      <!-- <v-list>
        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
        </v-list-group>
      </v-list> -->
      <v-layout align-center justify-end fill-height>
        <v-avatar :size="55">
          <img src="@/assets/imgs/head.png" alt="avatar">
        </v-avatar>
        <div class="ml-2">
          <div class="text-xs-center"><strong>admin</strong></div>
          <div class="text-xs-center"><strong>张三李四王五</strong></div>
        </div>
        <v-btn color="error" flat fab @click="logout">
          <v-icon size="30">exit_to_app</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-content>
</template>

<script>
const menus = [{
  id: '1',
  name: '首页',
  path: '/index'
}, {
  id: '2',
  name: '销售',
  subNavs: [{
    id: '2-1',
    name: '销售登记'
  }, {
    id: '2-2',
    name: '销售明细'
  }, {
    id: '2-3',
    name: '销售报表'
  }]
}, {
  id: '3',
  name: '采购',
  subNavs: [{
    id: '3-1',
    name: '采购登记'
  }, {
    id: '3-2',
    name: '采购明细'
  }, {
    id: '3-3',
    name: '采购报表'
  }]
}, {
  id: '4',
  name: '记账',
  subNavs: [{
    id: '4-1',
    name: '记账登记'
  }, {
    id: '4-2',
    name: '记账明细'
  }, {
    id: '4-3',
    name: '记账报表'
  }]
}, {
  id: '5',
  name: '报表',
  subNavs: [{
    id: '5-1',
    name: '汇总报表'
  }, {
    id: '5-2',
    name: '采购报表'
  }, {
    id: '5-3',
    name: '销售报表'
  }, {
    id: '5-4',
    name: '记账报表'
  }]
}, {
  id: '6',
  name: '设置',
  path: '/settings/user',
  subNavs: [{
    id: '6-2',
    name: '系统设置'
  }, {
    id: '6-3',
    name: '人员',
    path: '/settings/user'
  }]
}]
export default {
  name: 'Index',
  data () {
    return {
      menus: menus
    }
  },
  methods: {
    logout () {
      this.$router.replace('/login')
      this.$axios.post('/logout', {
        loginUuid: this.$store.state.userInfo.loginUuid
      }).then(data => {
        this.$store.commit('setUserInfo')
      })
    }
  }
}
</script>
