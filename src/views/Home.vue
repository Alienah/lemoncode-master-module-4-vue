<template>
  <div class="home">
    <Suspense>
      <template #default>
        <MembersList />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MembersList from "@/components/MembersList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    MembersList,
  },
});
</script>
