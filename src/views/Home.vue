<template>
  <div class="home">
    <MembersList />
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
