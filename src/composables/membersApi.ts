import { computed, ComputedRef, ref, Ref } from "vue";
import { membersService } from "@/services/members";
import { Member } from "@/types";

const useMembersApi = async (): Promise<{
  membersList: Ref<Member[]>;
  totalMembers: ComputedRef<number>;
}> => {
  const membersList: Ref<Member[]> = ref([]);
  membersList.value = await membersService.get("lemoncode");

  const totalMembers = computed(() => {
    return membersList.value.length;
  });

  return {
    membersList,
    totalMembers,
  };
};

export default useMembersApi;
