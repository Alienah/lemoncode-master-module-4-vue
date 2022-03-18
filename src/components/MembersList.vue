<template>
  <div class="members-list_container">
    <h2>Members List</h2>
    <ul class="members-list">
      <li v-for="member in membersList" :key="member.id">
        {{ member.login }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMembersApi from "@/composables/membersApi";

export default defineComponent({
  async setup() {
    const { membersList } = await useMembersApi();

    return {
      membersList,
    };
  },
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
