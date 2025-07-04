import type { Member, ReturnJSONMembers } from "@/interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONMembers> => {
  let resultVal = 0;
  const memberListArray: Member[] = [];
  // throw createError("擬似エラー発生");
  try {
    const body = await readBody(event);
    // throw createError("擬似エラー発生");
    const member = body as Member;
    let memberList = new Map<number, Member>();
    const storage = useStorage();
    let memberListStorage = (await storage.getItem(
      "redis:member-management_members"
    )) as any;
    if (memberListStorage != undefined) {
      memberList = new Map<number, Member>(memberListStorage as any);
    }
    memberList.set(member.id, member);
    await storage.setItem("redis:member-management_members", [...memberList]);
    memberListArray[0] = member;
    resultVal = 1;
  } catch (error) {
    console.log(error);
  }
  return {
    result: resultVal,
    data: memberListArray,
  };
});
