<template>
  <section class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </section>
</template>

<script>
import HelloWorld from "@/modules/Home/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
