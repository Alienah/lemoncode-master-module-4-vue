<template>
  <div class="members-list_container">
    <h2>Members List</h2>
    <el-table class="members-table" :data="membersList" stripe fit>
      <el-table-column class-name="column--avatar" label="Avatar" width="120">
        <template #default="scope">
          <div class="avatar-container">
            <el-avatar :size="85" :src="scope.row.avatar_url" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="Id" width="140" />
      <el-table-column label="Name" min-width="120">
        <template #default="scope">
          <el-tag size="large">{{ scope.row.login }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" width="120">
        <template #default="scope">
          <router-link :to="`/detail/${scope.row.login}`">
            <el-button size="large">Detail</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
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
.members-table {
  width: 100%;
  margin: 16px 0;
}

.avatar-container {
  display: flex;
  align-items: center;
  padding-left: 8px;
}

.column--avatar {
  padding-left: 24px;
}

.el-tag {
  font-size: var(--el-font-size-base);
}
</style>
