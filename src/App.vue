<template>
  <div>
    <Header />
    <div class="container">
      <TodoList />
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import TodoList from "./components/lists/TodoList";

export default {
  name: "App",
  components: {
    Header,
    TodoList,
  },
};
</script>

<style lang="scss">
// @import "./styles/global.scss";
</style>
