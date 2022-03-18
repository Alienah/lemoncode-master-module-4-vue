<template>
  <div class="member-detail">
    <h1>{{ member.name }} details</h1>
    <el-card class="card" :body-style="{ padding: '16px' }">
      <img :src="member.avatar_url" class="avatar-image" />
      <div style="padding: 14px">
        <p>Username: {{ member.login }}</p>
        <p>Location: {{ member.location }}</p>
        <p>Company: {{ member.company }}</p>
        <el-divider />
        <div class="bottom">
          <el-link :href="member.html_url" target="_blank" type="primary"
            >Go to Github profile</el-link
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMemberDetailApi from "@/composables/memberDetailApi";

export default defineComponent({
  async setup() {
    const { member } = await useMemberDetailApi();

    return {
      member,
    };
  },
});
</script>

<style scoped lang="scss">
.card {
  max-width: 864px;
  margin: auto;
}
.avatar-image {
  width: 300px;
}
</style>
