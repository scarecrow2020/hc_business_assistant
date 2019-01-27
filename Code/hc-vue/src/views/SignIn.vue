<template>
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
      this.$router.push({ name: 'index' })
      this.$notify()
    }
  }
}
</script>
