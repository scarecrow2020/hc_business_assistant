<template>
<Layout class="bg-img fill-height">
    <Header class="bg-none f-white f-title-big">
      <Row>
        <Col span="22">
          HC Manager
        </Col>
        <Col span="2">
          <Button type="warning" ghost @click="login(true)">游客</Button>
        </Col>
      </Row>
    </Header>
    <Content class="display-flex">
      <Row type="flex" class="flex-center">
        <Col span="12" class="f-title-big f-black title-big login-y">
          <p>快捷更高效</p>
          <p>欢迎使用HC商家助手</p>
        </Col>
        <Col span="12" align="middle" class="login-y">
          <Form ref="formInline" class="login-form">
            <FormItem>
              <hc-input placeholder="请输入用户名" prefix="ios-person" size="large" v-model="loginData.userName"></hc-input>
            </FormItem>
            <FormItem>
              <!-- <hc-input placeholder="请输入密码" size="large" v-model="loginData.password" :type="showPsd ? 'text' : 'password'" @enter-click="login">
                <Icon :type="showPsd ? 'md-eye' : 'ios-lock'" slot="prefix" @click.native="showPsd = !showPsd"></Icon>
              </hc-input> -->
              <mu-text-field color="black" v-model="loginData.password" label="Password" :action-icon="showPsd ? 'visibility_off' : 'visibility'" :action-click="() => (showPsd = !showPsd)" :type="showPsd ? 'text' : 'password'"></mu-text-field>
              <!-- <Row type="flex" style="background-color:white;border-radius:3px">
                <Col :span="22">
                  <Input placeholder="请输入密码" size="large" :type="showPsd ? 'text' : 'password'" v-model="loginData.password" clearable >
                    <Icon :type="showPsd ? 'md-eye' : 'ios-lock'" slot="prefix" @click.native="showPsd = !showPsd"></Icon>
                  </Input>
                </Col>
                <Col :span="2">
                  <Icon type="md-eye" :size="20" style="height:100%;padding-top:8px" ></Icon>
                </Col>
              </Row> -->
            </FormItem>
            <FormItem>
              <div class="display-flex flex-right">
              <Button type="success" class="ml-10" @click="login(false)">登录</Button>
              <Button type="warning" @click="login(true)">游客</Button>
              </div>
            </FormItem>
          </Form>
        </col>
      </Row>
    </Content>
    <Footer class="align-center bg-none f-white">&copy;2019 Copyright HC商家助手 www.hcmanager.com</Footer>
  </Layout>
</template>
<script>
export default {
  data () {
    return {
      loginData: {
        userName: null,
        password: null
      },
      showPsd: false
    }
  },
  methods: {
    login (isVisitor) {
      let params = { userName: 'visitor' }
      if (!isVisitor) {
        params = this.loginData
        if (!params.userName) {
          this.$notify.error({ title: '用户名不能为空' })
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
