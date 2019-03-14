<template>
  <v-app>
    <v-navigation-drawer width="240" stateless value="true" :mini-variant.sync="drawerMini" fixed app class="bg-main" dark>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/imgs/head1.jpg" @click.stop="drawerToggle">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>张三 李四</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="drawerToggle">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <template v-for="menu in menus">
          <v-list-tile v-if="!menu.subMenus" :key="menu.id">
            <v-list-tile-action>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ menu.name }}</v-list-tile-title>
          </v-list-tile>
          <v-list-group :prepend-icon="menu.icon || 'view_list'" v-model="menu.expand" no-action v-else :key="menu.id" active-class="info--text">
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ menu.name }}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="subMenu in menu.subMenus" :key="subMenu.id" :to="{path: subMenu.path || '/test'}" active-class="info">
              <v-list-tile-action>
                <v-icon v-text="subMenu.icon || 'folder_open'"></v-icon>
              </v-list-tile-action>
              <v-list-tile-title v-text="subMenu.name"></v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="elevation-0">
      <v-toolbar-title class="headline">
        <span class="f-title-big">MZ Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center justify-end fill-height>
          <!-- <v-avatar >
            <img src="@/assets/imgs/head.png" alt="avatar">
          </v-avatar>
          <div class="ml-2">
            <div class="text-xs-center"><strong>admin</strong></div>
            <div class="text-xs-center"><strong>张三李四王五</strong></div>
          </div> -->
        <v-btn small flat icon @click="logout">
          <v-icon>cached</v-icon>
        </v-btn>
        <v-btn small flat icon @click="logout">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn color="error" flat icon small  @click="logout">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>
<script lang="ts">
import menus from '@/data/menu'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Index'
})
export default class Home extends Vue {
  menus: Array<any> = menus
  drawerMini: Boolean = false

  drawerToggle () {
    this.drawerMini = !this.drawerMini
  }
  test () {
    this.drawerToggle()
    console.log(this.drawerMini)
    console.log('test')
  }
  logout () {}
}
</script>
