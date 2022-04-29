<template>
  <form class="search-form" @submit.prevent="search()">
    <el-input
      class="search-input"
      v-model="searchTerm"
      placeholder="Lemoncode"
    />
    <el-button class="search-button" type="primary" native-type="submit"
      >Search members</el-button
    >
  </form>
</template>

<!-- Note: You can see an example of composition api using the setup function in MemberDetail component -->
<script lang="ts" setup>
import { Ref, ref, defineEmits } from "vue";
import { useStore } from "vuex";

const module = "OrgSearchModule";
const store = useStore();
const searchTerm: Ref<string> = ref(store.state[module].orgSearched);
const emit = defineEmits(["search"]);
const search = () => {
  emit("search", searchTerm.value);
};
</script>

<style scoped lang="scss">
.search-form {
  display: flex;
  max-width: 600px;
  margin: auto;
}
.search-button {
  margin-left: 16px;
}
</style>
