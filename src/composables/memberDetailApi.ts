import { ref, Ref } from "vue";
import { membersService } from "@/services/members";
import { Member } from "@/types";
import { useRoute } from "vue-router";

const useMemberDetailApi = async (): Promise<{
  member: Ref<Member>;
}> => {
  const route = useRoute();
  const username = String(route.params.username);
  const member = ref();
  member.value = await membersService.getMember(username);

  return {
    member,
  };
};

export default useMemberDetailApi;
