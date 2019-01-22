<template>
  <i-input
    :value="value"
    @input="inputHandler"
    :placeholder="placeholder"
    :size="size" :type="type"
    :clearable="clearable"
    @click.native="clearHandler"
    @keydown.native.enter="enterHandler"
    :prefix="prefix"
    ref="hc_input">
    <slot name="prefix" slot="prefix"></slot>
  </i-input>
</template>
<script>
export default {
  props: {
    value: {},
    placeholder: {},
    size: {},
    type: {},
    clearable: {
      default () {
        return true
      }
    },
    prefix: {}
  },
  data () {
    return {}
  },
  methods: {
    inputHandler (value) {
      this.$emit('input', value)
    },
    clearHandler (event) {
      if (event.target.tagName === 'I') {
        this.$emit('clear-click')
        event.cancelBubble = true
        this.$refs['hc_input'].$refs.input.focus()
      }
    },
    enterHandler () {
      this.$emit('enter-click')
    }
  }
}
</script>
