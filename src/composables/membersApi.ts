import {
  computed,
  ComputedRef,
  isRef,
  reactive,
  ref,
  Ref,
  watchEffect,
} from "vue";
import { membersService } from "@/services/members";
import { Member } from "@/types";

const useMembersApi = async (
  org: Ref
): Promise<{
  membersList: Ref<Member[]>;
  totalMembers: ComputedRef<number>;
}> => {
  const orgValue = reactive(org);
  const membersList: Ref<Member[]> = ref([]);

  if (isRef(org)) {
    watchEffect(async () => {
      membersList.value = await membersService.get(orgValue.value);
    });
  } else {
    membersList.value = await membersService.get(orgValue.value);
  }

  const totalMembers = computed(() => {
    return membersList.value.length;
  });

  return {
    membersList,
    totalMembers,
  };
};

export default useMembersApi;
