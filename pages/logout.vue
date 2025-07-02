<script setup lang="ts">
import type { User } from "@/interfaces";

// ログインユーザー情報の削除
const loginUserCookie = useCookie<User | null>("loginUser"); //1
loginUserCookie.value = null; //2
const loginTokenCookie = useCookie<string | null>("loginToken"); //3
loginTokenCookie.value = null;
await navigateTo("/login");
</script>
