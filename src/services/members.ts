import { Member } from "@/types";

export const membersService = {
  async get(org: string): Promise<Member[]> {
    const URL = `https://api.github.com/orgs/${org}/members`;
    const members = await fetch(URL)
      .then((res) => res.json())
      .catch((err) => console.log(`Error trying to get ${org} data:`, err));
    return members;
  },
  async getMember(username: Member["login"]): Promise<Member | undefined> {
    if (!username) throw new Error("username is required");
    const URL = `https://api.github.com/users/${username}`;
    const member = await fetch(URL)
      .then((res) => res.json())
      .catch((err) =>
        console.log(
          `Error trying to get the user with username ${username}:`,
          err
        )
      );
    return member;
  },
};
