<script setup lang="ts">
console.log("index.vue started"); //1
definePageMeta({
  middleware: ["loggedin-check"],
});
</script>
<template>
  <h1>TOP</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <section>
    <p>
      <NuxtLink v-bind:to="{ name: 'member-memberList' }">
        会員管理はこちら
      </NuxtLink>
    </p>
  </section>
</template>
