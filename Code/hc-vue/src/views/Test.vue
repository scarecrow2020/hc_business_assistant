<template>
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
              <FormItem prop="user">
                  <Input type="text" v-model="loginData.userName" placeholder="Username">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem>
              <FormItem prop="password">
                  <Input type="password" v-model="loginData.password" placeholder="Password">
                      <Icon type="ios-lock-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem>
              <FormItem>
                  <Button type="primary" >Signin</Button>
                  <Button type="primary" >Signin</Button>
              </FormItem>
          </Form>
        </col>
      </Row>
    </Content>
    <Footer class="align-center bgc-none f-white">&copy;2019 Copyright HC商家助手 www.hcmanager.com</Footer>
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
      showPsd: false,
      show: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  methods: {
    test () {
      // this.show = true
      this.$notify({
        // timeout: 1000,
        type: 'info',
        close: true,
        message: this.lorem
      })
    },
    test1 () {
      this.$Notice.open({ title: 123 })
    }
  }
}
</script>
