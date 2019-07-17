<template>
  <div>
    <p>Hello, World!</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: 'hello'
    }
  },
})
</script>
