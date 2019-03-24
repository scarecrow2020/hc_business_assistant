import Vue from 'vue'
// import MzTable from './MzTable'
// import MzTable1 from './MzTable1'

const components = require.context('../components', false, /Mz[A-Z]\w+\.(vue|js)$/)
components.keys().forEach(fileName => {
  const componentConfig = components(fileName)
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// const components = {
//   MzTable,
//   MzTable1
// }

// Object.keys(components).forEach(key => {
//   Vue.component(key, components[key])
// })

Vue.component('render-component', {
  functional: true,
  props: {
    message: String
  },
  render (h, context) {
    return h('div', [
      h('todo-item', {
        scopedSlots: {
          default: function (props) {
            // console.log(context)
            return h('span', props.text)
          }
        }
      }),
      // this.message
      context.props.message
      // ,
      // this.$scopedSlots.default({
      //   text: this.message
      // })
    ])
  },
  created () {
    // console.log(this.message)
  }
})

Vue.component('todo-item', {
  props: {
    message: String,
    todoItem: {
      type: Object,
      default () {
        return {
          text: 'todo item component'
        }
      }
    }
  },
  template: '<span><slot :text="todoItem.text"></slot>{{ todoItem }}</span>'
})

const mixin = {
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

Vue.component('todo-item1', {
  functional: true,
  inheritAttrs: false,
  inject: ['cc', 'provideMethod'],
  mixins: [mixin],
  props: {
    todo: {
      type: Object,
      default () {
        return {
          text: 'todo item 1 component'
        }
      }
    },
    b: String,
    c: Boolean
  },
  created () {
    this.provideMethod()
    console.log(this.todo)
  },
  data () {
    return {
      child: {
        name: 'child',
        age: '8'
      }
    }
  },
  template: `<div>
  111{{cc}}
  <todo-item :todo-item="todo"></todo-item>
  默认slot:<slot></slot>
  <br/>
  第一个slot:<slot name="one" child-name="lmz" :child="child"></slot><br/>
  <span>-----{{$props}}----{{c}}----{{$attrs}}</span>
  <br/>
  第二个slot:<slot name="two" child-name="lmz"></slot>
  <v-btn @click="$emit('update:c', !c)">test</v-btn>
  <v-btn @click="hello">mixin</v-btn>
  </div>`
})
