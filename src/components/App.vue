<template>
  <div>
    <p>Hello, World!</p>
    <p>{{ msg }}</p>
    <app-decorator name="name" initialEnthusiasm="5"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppDecorator from "./AppDecorator";

export default Vue.extend({
  components: {
    AppDecorator
  },
  data() {
    return {
      msg: 'hello'
    }
  },
})
</script>
