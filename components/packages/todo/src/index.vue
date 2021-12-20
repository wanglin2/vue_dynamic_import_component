<template>
  <div class="text" @click="onClick">{{ count }}</div>
</template>

<script>
// import { ref } from 'vue'
// const count = ref(0)
// const onClick = () => {
//   console.log(666, count);
//   count.value++
// }
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    onClick() {
      this.count++
    }
  }
}
</script>

<style lang="less" scoped>
.text {
  color: red;
}
</style>