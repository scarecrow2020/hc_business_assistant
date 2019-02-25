<template>
  <v-app>
    <v-navigation-drawer width="260" stateless value="true"
    :mini-variant.sync="mini" fixed app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>李 小木子</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group
          prepend-icon="settings"
          value="true"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>设置</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title v-text="'人员设置'"></v-list-tile-title>
              <!-- <v-list-tile-action>
                <v-icon v-text="'account_circle'"></v-icon>
              </v-list-tile-action> -->
          </v-list-tile>
          <!-- <v-list-tile>
              <v-list-tile-title>系统管理</v-list-tile-title>
              <v-list-tile-action>
                  <v-icon></v-icon>
                </v-list-tile-action>
            </v-list-tile> -->
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span class="f-title-big">MZ Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content class="bg-main">
      <v-container fluid >
        <!-- <router-view></router-view> -->
        <v-layout align-space-around column>
          <v-layout align-space-around column>
            123
            525
          </v-layout>
        </v-layout>
      </v-container>
      <v-container fluid fill-height>
        <!-- <router-view></router-view> -->
        <v-layout align-space-around column>
          <v-flex xs10 class="pink">
            1
            <!-- <v-card>
              <v-card-text>
                123132
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card> -->
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
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>
<script>
export default {
  name: 'BackIndex',
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'Admin', icon: 'gavel' }
      ],
      mini: true
    }
  }
}
</script>
