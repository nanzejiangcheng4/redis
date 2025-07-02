import type { Member, ReturnJSONMembers } from "@/interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONMembers> => {
  let resultVal = 0;
  const memberListArray: Member[] = [];
  // throw createError(擬似エラー発生');
  try {
    const params = event.context.params;
    // memberDB.tsを利用して会員リスト情報Mapオブジェクトを生成
    let memberList = new Map<number, Member>();
    const storage = useStorage();
    const memberListStorage = await storage.getItem(
      "local:member-management_members"
    );
    // throw createError('擬似エラー発生);
    if (memberListStorage != undefined) {
      memberList = new Map<number, Member>(memberListStorage as any);
    }
    if (params != undefined) {
      // ルートパラメータのidを数値変換
      const idNo = Number(params!.id);
      // ルートパラメータに該当する会員情報オブジェクトを取得
      const member = memberList.get(idNo) as Member;
      resultVal = 1;
      if (member != undefined) {
        memberListArray[0] = member;
      }
    }
  } catch (error) {
    console.log(error);
  }
  // 送信データオブジェクトをリターン
  return {
    result: resultVal,
    data: memberListArray,
  };
});
