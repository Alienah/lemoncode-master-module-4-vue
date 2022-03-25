<template>
  <div class="search-container">
    <el-input
      class="search-input"
      v-model="searchTerm"
      placeholder="Lemoncode"
    />
    <el-button class="search-button" type="primary" @click.prevent="search()"
      >Search members</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, defineEmits } from "vue";

const searchTerm: Ref<string> = ref("Lemoncode");
const emit = defineEmits(["search"]);
const search = () => {
  emit("search", searchTerm.value);
};
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  max-width: 600px;
  margin: auto;
}
.search-button {
  margin-left: 16px;
}
</style>
