<template>
  <div class="members-list_container">
    <h2>Members List</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MembersList",
});
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 12px;
}
a {
  color: #42b983;
}
</style>
