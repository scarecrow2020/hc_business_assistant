import Vue from 'vue'
import { Notice } from 'iview'

const notify = (noticeType, options = { type: 'operate' }) => {
  const notifyMsgs = {
    save: '保存',
    operate: '操作'
  }
  let title = null
  if (typeof options === 'string') {
    title = options
  } else {
    let msgSuffix = ['warning', 'error'].includes(noticeType) ? '失败' : '成功'
    title = `${notifyMsgs[options.type]}${msgSuffix}`
  }
  Notice[noticeType]({
    title: title,
    ...options
  })
}

const HcPlugin = {
  install (Vue) {
    Vue.prototype.$notify = this.notice
    /* eslint-disable no-extend-native */
    Array.prototype.remove = function (val) {
      var index = this.indexOf(val)
      if (index > -1) {
        this.splice(index, 1)
      }
    }
    // Vue.prototype.$openDialog = this.openDialog
    // Vue.prototype.$moment = moment
    // Vue.filter('monthFormat', (value) => {
    //   return moment(value).format('YYYY-MM')
    // })
    // Vue.filter('dateFormat', (value) => {
    //   return moment(value).format('YYYY-MM-DD')
    // })
    // Vue.filter('moneyFormat', (value) => {
    //   let money = value ? parseFloat(value) : 0
    //   let decimal = money.toFixed(2).split('.')[1]
    //   let integer = money.toFixed(2).split('.')[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    //   return integer + '.' + decimal
    // })
  },
  notice: {
    success: (options) => {
      notify('success', options)
    },
    warning: (options = { type: 'operate' }) => {
      notify('warning', options)
    },
    info: (options = { type: 'operate' }) => {
      notify('info', options)
    },
    error: (options = { type: 'operate' }) => {
      notify('error', options)
    }
  }
  // notify (options = {}) {
  //   return new Promise((resolve, reject) => {
  //     const notify = new Vue({
  //       render (h) {
  //         // return h('hc-snackbar', {
  //         //   props: { value: this.initParams }
  //         // })
  //         const close = h('v-btn', {
  //           props: {
  //             flat: true
  //           },
  //           on: {
  //             click: () => { this.close() }
  //           }
  //         }, [h('v-icon', {}, 'cancel')])
  //         return h('v-snackbar', {
  //           props: this.props
  //         }, [this.message, close])
  //       },
  //       data () {
  //         let [messages, type = 'error'] = [{
  //           error: '操作失败',
  //           success: '操作成功'
  //         }, options.color || options.type]
  //         return {
  //           props: {
  //             value: true,
  //             timeout: 3000,
  //             top: true,
  //             right: true,
  //             'auto-height': true,
  //             color: type,
  //             ...options
  //           },
  //           message: options.message || messages[type]
  //           // initParams: {
  //           //   show: true,
  //           //   ...options
  //           // }
  //         }
  //       },
  //       methods: {
  //         close () {
  //           this.$destroy()
  //           let _parentElement = this.$el.parentNode
  //           if (_parentElement) {
  //             _parentElement.removeChild(this.$el)
  //           }
  //           this.$el.remove()
  //         }
  //       },
  //       created () {
  //         if (this.props.timeout) {
  //           setTimeout(() => {
  //             this.close()
  //           }, this.props.timeout)
  //         }
  //       },
  //       destroyed () {
  //         // console.log('des')
  //       }
  //     }).$mount()
  //     document.getElementById('app').appendChild(notify.$el)
  //   })
  // }
  // openDialog (componentName, options, closeCallback) {
  //   return new Promise((resolve, reject) => {
  //     const dialog = new Vue({
  //       render (h) {
  //         const title = h('span', {
  //           slot: 'title'
  //         }, this.title)
  //         const content = h(componentName, {
  //           props: this.props,
  //           ref: 'dialog-content',
  //           on: {
  //             'submit-dialog': this.submitDialog,
  //             'update-title': this.updateTitle
  //           }
  //         })
  //         const footer = this.hideFooter === false ? h('span', {
  //           slot: 'footer'
  //         }, [
  //           h('el-button', {
  //             props: {
  //               type: 'danger',
  //               size: 'small'
  //             },
  //             on: {
  //               click: () => { this.close() }
  //             }
  //           }, '关闭'),
  //           h('el-button', {
  //             props: {
  //               type: 'primary',
  //               size: 'small'
  //             },
  //             on: {
  //               click: () => { this.confirmDialog('confirm') }
  //             }
  //           }, this.confirmButtonText)]) : ''
  //         return h('el-dialog', {
  //           props: {
  //             width: this.width,
  //             visible: this.show,
  //             fullscreen: this.fullscreen,
  //             closeOnPressEscape: false,
  //             closeOnClickModal: false,
  //             showClose: this.showClose
  //           },
  //           on: {
  //             close: this.close
  //           }
  //         }, [title, content, footer])
  //       },
  //       data () {
  //         return {
  //           show: true,
  //           title: '',
  //           hideFooter: false,
  //           fullscreen: false,
  //           confirmButtonText: '确定',
  //           width: '50%',
  //           showClose: true,
  //           props: {},
  //           ...options
  //         }
  //       },
  //       methods: {
  //         close () {
  //           closeCallback && closeCallback(options)
  //           this.$destroy()
  //           let _parentElement = this.$el.parentNode
  //           if (_parentElement) {
  //             _parentElement.removeChild(this.$el)
  //           }
  //           this.$el.remove()
  //           resolve(null)
  //         },
  //         confirmDialog (btnType) {
  //           this.$refs['dialog-content'].submit({
  //             ...options,
  //             btnType
  //           })
  //           // console.log(type)
  //         },
  //         submitDialog (value) {
  //           this.show = false
  //           resolve(value)
  //         },
  //         updateTitle (title) {
  //           this.title = title
  //         }
  //       }
  //     }).$mount()
  //     document.getElementById('app').appendChild(dialog.$el)
  //   })
  // }
}
Vue.use(HcPlugin)
export default HcPlugin
