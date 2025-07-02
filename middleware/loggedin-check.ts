import type { User } from "@/interfaces";

// 1
export default defineNuxtRouteMiddleware((to, from) => {
  const loginTokenCookie = useCookie<string | null>("loginToken"); //2
  const loginUserCookie = useCookie<User | null>("loginUser");
  if (loginTokenCookie.value == null || loginUserCookie.value == null) {
    return navigateTo("/login");
  } else {
    return;
  }
});
