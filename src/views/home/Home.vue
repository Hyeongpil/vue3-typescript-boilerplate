<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { authStore } from "@/store/modules/auth";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    authStore.setUserSeq(1);
    console.log("seq :", authStore.userSeq);
  },
});
</script>
