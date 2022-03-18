import { Member } from "@/types";

export const membersService = {
  async get(org: string): Promise<Member[]> {
    const URL = `https://api.github.com/orgs/${org}/members`;
    const members = await fetch(URL)
      .then((res) => res.json())
      .catch((err) => console.log(`Error trying to get ${org} data:`, err));
    return members;
  },
  // async getMember(id: Member["id"], org: string): Promise<Member | undefined> {
  //   if (!id) throw new Error("id is required");
  //   return this.get(org).then((list) => {
  //     return list.find((item: Member) => String(item.id) === String(id));
  //   });
  // },
};
