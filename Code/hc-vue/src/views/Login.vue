<template>
<v-app>
  <v-content class="bg-color">
    <v-toolbar app color="teal darken-1" dark>
      <v-img contain max-height="55px" max-width="100px" src="@/assets/imgs/logo1.png"></v-img>
      <v-toolbar-title class="font-weight-bold display-1">HC Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center justify-end fill-height>
        <v-btn flat round  depressed outline @click="login(true)">游客</v-btn>
      </v-layout>
    </v-toolbar>
    <v-container fill-height fluid pb-0>
      <v-layout row>
        <v-layout column align-center justify-center>
          <v-flex text-xs-center shrink>
            <h2 class="display-2">快捷更高效<br/><br/>欢迎使用HC商家助手</h2>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
          <v-form ref="form">
            <v-text-field
              v-model="loginData.userName"
              label="用户名"
              autofocus
              clearable
              class="input-bgc"
            ></v-text-field>
            <v-text-field
              v-model="loginData.password"
              :append-icon="showPsd ? 'visibility_off' : 'visibility'"
              :type="showPsd ? 'text' : 'password'"
              label="密码"
              hint="至少6个字符"
              clearable
              @click:append="showPsd = !showPsd"
              @keydown.13="login()"
            ></v-text-field>
            <v-btn color="info" round @click="login()">登录</v-btn>
            <v-btn round @click="login(true)">游客</v-btn>
          </v-form>
        </v-layout>
      </v-layout>
    </v-container>
    <v-footer app class="text-xs-center bg-none">
      <v-spacer><span class="white--text subheading">&copy;2019 Copyright HC商家助手 www.hcmanager.com</span></v-spacer>
    </v-footer>
    <hc-snackbar v-model="snackbar"></hc-snackbar>
  </v-content>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      loginData: {
        userName: null,
        password: null
      },
      showPsd: false,
      snackbar: {
        show: false,
        message: null,
        close: true
      }
    }
  },
  methods: {
    login (isVisitor = false) {
      let params = { userName: 'visitor' }
      if (!isVisitor) {
        params = this.loginData
        if (!params.userName) {
          this.$notify({ message: '用户名不能为空' })
          return
        }
        if (!params.password || params.password.length < 7) {
          this.$notify({ message: '密码不能少于7位' })
          return
        }
      }
      this.$axios.get('/login', { params }).then(({ data }) => {
        if (data.success) {
          this.$notify({
            type: 'success',
            message: '登录成功'
          })
          // this.snackbar.show = true
          this.$store.commit('setUserInfo', data.result)
          this.$router.push({ name: 'index' })
        } else {
          this.$notify({ message: data.msg })
        }
      })
    }
  }
}
</script>
