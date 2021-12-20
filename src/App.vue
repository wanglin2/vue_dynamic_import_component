<template>
  <div>
    <component v-if="component" :is="component"></component>
    <button @click="load">加载组件</button>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import axios from 'axios'

const component = shallowRef('')

const getComponent = async (resUrl) => {
  try {
    const headers = { 'x-requested-with': '', Accept: 'text/plain,*/*' }
    const res = await axios.get(resUrl, { headers })
    let module = {
      exports: {},
    }
    const require = () => {
      return window.Vue
    }
    new Function('module', 'exports', 'require', `return ${res.data}`)(
      module,
      module.exports,
      require
    )
    component.value = module.exports.default

    // let comp = new Function(`return ${res.data}`)()
    // console.log(comp)
    // component.value = comp.default
  } catch (e) {
    console.log(e)
  }
}

const load = () => {
  getComponent(process.env.NODE_ENV !== 'production' ? '/packages/todo.js' : './dist/packages/todo.js')
}
</script>

<style>
</style>
