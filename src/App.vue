<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: { AppLayout },
};
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  color: $default-text-color;
}
</style>
