<template>
  <div>
    <Header />
    <div class="container">
      Test
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./public/css/_style.scss";
</style>
