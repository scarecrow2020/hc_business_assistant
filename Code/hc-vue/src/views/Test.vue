<template>
<v-app>
  <Layout class="bg-img fill-height">
    <Header class="bgc-none"></Header>
    <Content style="display:flex">
      <!-- <div class="pink">11</div> -->
      <Row type="flex" style="align-items:center;text-align:center;width:100%">
        <Col span="12" style="color:black;font-size:40px;font-weight: bold;height:200px;letter-spacing:.2rem">
          <p>快捷更高效<br/>欢迎使用HC商家助手</p></Col>
        <Col span="12" align="middle" style="height:200px">
          <!-- <Form ref="formInline" style="width:300px;margin:10px;0px">
              <FormItem prop="user">
                  <v-text-field
              v-model="loginData.userName"
              label="用户名"
              autofocus
              clearable
              class="input-bgc"
            ></v-text-field>
              </FormItem>
              <FormItem prop="password">
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
              </FormItem>
              <FormItem>
                  <v-btn color="info" round >登录</v-btn>
            <v-btn round>游客</v-btn>
              </FormItem>
          </Form> -->
          <Form ref="formInline" style="width:250px;margin:20px;0px">
            <FormItem>
              <hc-input placeholder="请输入用户名" prefix="ios-person" size="large" v-model="loginData.userName"></hc-input>
            </FormItem>
            <FormItem>
              <hc-input placeholder="请输入密码" size="large" v-model="loginData.password" :type="showPsd ? 'text' : 'password'" @enter-click="login(true)">
                <Icon :type="showPsd ? 'md-eye' : 'ios-lock'" slot="prefix" @click.native="showPsd = !showPsd"></Icon>
              </hc-input>
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
              <Button type="primary">Signin</Button>
              <Button type="primary">Signin</Button>
            </FormItem>
          </Form>
        </col>
      </Row>
    </Content>
    <Footer class="align-center bgc-none f-white">&copy;2019 Copyright HC商家助手 www.hcmanager.com</Footer>
  </Layout>
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
      show: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  methods: {
    login () {
      console.log(this.loginData)
      // this.show = true
      // this.$notify({
      //   // timeout: 1000,
      //   type: 'info',
      //   close: true,
      //   message: this.lorem
      // })
    },
    test1 () {
      this.$Notice.open({ title: 123 })
    }
  }
}
</script>
<style scoped >

</style>
