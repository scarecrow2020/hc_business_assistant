<template>
  <v-app>settings test page--{{id}}--{{routerParam}}--{{$route.params}}
    <br/>store:{{$store.state.count}}--{{$store.getters.countName}}
    --{{$store.getters.hello(2)}}
    <v-btn @click="testMethod">Test Method</v-btn>
    <v-text-field v-model="params.pString"></v-text-field>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Route, RawLocation } from 'vue-router'
// import { State, Action, Getter } from 'vuex-class'
import { mapState } from 'vuex'
import $axios from '@/plugins/axios.ts'
// import $axios from 'axios'
@Component({
  name: 'Test'
})
export default class Test extends Vue {
  @Prop({ type: Number }) id!: number
  @Prop() routerParam!: any
  params = {
    pNumber: null,
    pString: null,
    PBoolean: null
  }
  @Watch('$route', { deep: true })
  onRouteChanged (val: string, oldVal: string) {
    // this.init()
  }

  testMethod ($event: any) {
    $axios.get('http://localhost:8080/fae/admin/userList', {
      params: {
        page: 1,
        size: 10
      }
    }).then((response:any) => {
      console.log(response)
    })
    // this.$store.dispatch('addAction', { count: 20 })
    // this.$store.commit({ type: 'add', count: 10 })
    // this.$store.commit('add', { count: 10 })
  }
  init () {
    console.log('init')
    console.log(this.$route)
    this.params = Object.assign({}, this.params, {
      pNumber: 1,
      pString: 'string',
      PBoolean: true
    })
  }
  private beforeRouteUpdate (to: Route, from: Route, next: () => void): void {
    console.log('route update')
    this.init()
    next()
  }
  aa = {
        loginName: 'admin',
        password: 'admin'
      }
  created () {
    // this.init()
    $axios.post('http://localhost:8080/fae/admin/adminLogin', this.aa
    // {
      // params: {
        // loginName: 'admin',
        // password: 'admin'
      // }
    // }
    ).then((response:any) => {
      console.log(response)
    })
  }
  // get mapState([])
}
</script>
