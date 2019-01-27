<template>
  <v-app>
    <v-toolbar app dark class="bg-none elevation-0">
      <v-toolbar-title class="headline">
        <span class="f-title-big">MZ Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="warning" outline @click="signIn(true)">游客</v-btn>
    </v-toolbar>
    <v-content class="bg-img">
      <v-layout row fill-height align-center>
        <v-flex class="f-title-big">
          <p>快捷更高效</p>
          <p>欢迎使用HC商家助手</p>
        </v-flex>
        <v-flex>
          <v-layout column align-center>
            <div>
              <v-text-field v-model="userName" autofocus label="用户名" color="black" prepend-icon="person" clearable></v-text-field>
              <v-text-field v-model="password" label="密码" color="black" prepend-icon="lock" clearable @keyup.enter="signIn(false)"
                :append-icon="show ? 'visibility_off' : 'visibility'" @click:append="show = !show" :type="show ? 'text' : 'password'">
              </v-text-field>
              <v-btn color="success" @click="signIn(false)">登录</v-btn>
              <v-btn color="warning" @click="signIn(true)">游客</v-btn>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
    <v-footer app dark class="bg-none f-s-14">
      <v-spacer></v-spacer>
      <span>&copy; 2019-现在  MZ商家助手 All Rights Reserved</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      userName: null,
      password: null,
      show: false
    }
  },
  methods: {
    signIn (isVisitor) {
      console.log(isVisitor)
      this.$notify()
      // let params = { userName: 'visitor' }
      // if (!isVisitor) {
      //   params = this.loginData
      //   if (!params.userName) {
      //     this.$notify.error({ title: '用户名不能为空' })
      //     return
      //   }
      //   if (!params.password || params.password.length < 7) {
      //     this.$notify({ message: '密码不能少于7位' })
      //     return
      //   }
      // }
      // this.$axios.get('/login', { params }).then(({ data }) => {
      //   if (data.success) {
      //     this.$notify({
      //       type: 'success',
      //       message: '登录成功'
      //     })
      this.$store.commit('setUserInfo', { name: 'visitor', loginUuid: 'aaa' })
      this.$router.push({ name: 'index' })
      //   } else {
      //     this.$notify({ message: data.msg })
      //   }
      // })
    }
  }
}
</script>
