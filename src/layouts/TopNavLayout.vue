<template>
  <div id="app">
    <div id="nav">
      <span v-for="({ name, link }, index) in nav" :key="index">
        <router-link :to="link">{{ name }}</router-link>
        <span v-if="index !== nav.length - 1" class="seperator">|</span>
      </span>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "TopNavLayout",
  data: () => ({
    nav: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "I18n", link: "/i18n" },
    ],
  }),
};
</script>
<style lang="scss" scoped>
#nav {
  padding: 3rem;

  a {
    font-weight: bold;
    color: $default-text-color;

    &.router-link-exact-active {
      color: $primary-text-color;
    }
  }
  .seperator {
    margin: 0 1px;
  }
}
</style>
