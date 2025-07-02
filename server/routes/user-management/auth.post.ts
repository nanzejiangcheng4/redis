import type { User, ReturnJSONAuth } from "@/interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONAuth> => {
  // レスポンスオブジェクトの各プロパティの初期値を用意
  let resultVal = 0;
  let tokenVal = "";
  let loginUser: User | null = null;
  try {
    // リクエストボディを取得
    const body = await readBody(event);
    // この時点でエンドポイント側の処理は成功とみなす
    resultVal = 1;
    // ログインIDとパスワードが正しければ。。。
    if (body.loginId == "bow" && body.password == "wow") {
      // アクセストークンを生成
      tokenVal = "asogiajjois";
      // ログインユーザー情報を格納
      loginUser = {
        id: 1234,
        name: "山本五郎",
        loginId: body.loginId,
        password: "",
      };
    }
  } catch (error) {
    // todo: ここで、tokenValを空文字とloginUserをnullにしなくて良いのか？
    console.log(error);
  }
  return {
    result: resultVal,
    token: tokenVal,
    user: loginUser,
  };
});
