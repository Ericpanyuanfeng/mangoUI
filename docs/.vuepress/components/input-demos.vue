<template>
  <div>
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="error"></g-input>
    <br />
    <g-input v-model="message"></g-input>
    <br />
    <span>value:&nbsp;{{ message }}</span>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input,
  },
  data() {
    return {
      message: "hello world",
    };
  },
};
</script>
