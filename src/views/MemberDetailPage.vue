<template>
  <div class="member-detail-page">
    <Suspense>
      <template #default>
        <MemberDetail />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemberDetail from "@/components/MemberDetail.vue"; // @ is an alias to /src

export default defineComponent({
  name: "MemberDetailPage",
  components: {
    MemberDetail,
  },
});
</script>
