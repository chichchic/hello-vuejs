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
  computed: {
    nav() {
      return this.$pages.map((path) => {
        const shortcut = path[0].toLowerCase();
        return {
          name: shortcut,
          link: shortcut.startsWith("home")
            ? "/"
            : path.map((p) => p.toLowerCase()).join("/"),
        };
      });
    },
  },
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
