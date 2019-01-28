<template>
  <v-app>
    <v-responsive max-height="400px">
      <v-img :aspect-ratio="16/9" max-height="400px" src="@/assets/imgs/bg2.jpg" gradient="to top, rgba(160, 90, 70, 0.85), rgba(30, 40, 30, 0.85)">
        <v-toolbar dark color="bg-none elevation-0">
          <v-toolbar-title class="headline">
            <span class="f-title-big">MZ Manager</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-menu offset-y open-on-hover v-for="menu in menus" :key="menu.id">
              <v-btn slot="activator" flat exact-active-class="teal lighten-1" :to="menu.path">{{ menu.name }}</v-btn>
              <v-list subheader v-if="menu.subNavs">
                <v-list-tile
                  v-for="(item, index) in menu.subNavs"
                  :key="index"
                  :to="item.path"
                >
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-toolbar-items>
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
        <v-flex xs6 offset-xs3 class="my-3">
          <v-carousel height="300">
            <v-carousel-item
            v-for="(item,i) in imgs"
            :key="i"
            :src="item.src"
            reverse-transition="fade"
            transition="fade"
          ></v-carousel-item>
            <!-- <v-carousel-item :src="img" v-for="(img, index) in imgs" :key="index"></v-carousel-item> -->
          </v-carousel>
        </v-flex>
      </v-img>
    </v-responsive>
    <v-content class="bg-color">
      <!-- <v-img :aspect-ratio="16/9" width="auto" height="auto" src="@/assets/imgs/bg2.jpg" >
      </v-img> -->
      <!-- <router-view></router-view> -->
    </v-content>
    <!-- <v-content class="pink">
      <router-view></router-view>
    </v-content> -->
    <v-footer app dark class="bg-color f-s-14">
      <v-spacer></v-spacer>
      <span>&copy; 2019-现在  MZ商家助手 All Rights Reserved</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
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
    name: '系统设置',
    path: '/settings/system'
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
      menus: menus,
      imgs: [{
        src: require('@/assets/imgs/d1.jpg')
      }, {
        src: require('@/assets/imgs/d2.jpg')
      }, {
        src: require('@/assets/imgs/d3.jpg')
      }, {
        src: require('@/assets/imgs/d4.jpg')
      }]
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
