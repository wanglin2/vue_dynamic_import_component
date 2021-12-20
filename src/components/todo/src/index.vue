<template>
  <div class="text" @click="onClick">{{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const onClick = () => {
  count.value++
}
</script>

<style lang="less">
.text {
  color: red;
}
</style>