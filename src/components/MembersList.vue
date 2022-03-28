<template>
  <div class="members-list_container">
    <h2>{{ organizationName }} Members List</h2>
    <Search @search="onSearch" />
    <p class="total"><strong>Total of members:</strong> {{ totalMembers }}</p>
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
import { defineComponent, Ref, ref } from "vue";
import useMembersApi from "@/composables/membersApi";

export default defineComponent({
  async setup() {
    const organizationName: Ref<string> = ref("Lemoncode");
    const { membersList, totalMembers } = await useMembersApi(organizationName);

    const onSearch = (organization: string) => {
      organizationName.value = organization;
    };

    return {
      membersList,
      onSearch,
      organizationName,
      totalMembers,
    };
  },
});
</script>

<style scoped lang="scss">
.members-list_container {
  max-width: 1200px;
  margin: 0 auto;
}

.total {
  text-align: end;
  padding: 4px 24px;
}

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
