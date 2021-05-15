<template>
  <header>
    <h4>1ForFit Task</h4>
    <div class="action-btns">
      <ListForm />

      <div class="theme-switcher-wrap">
        <div
          class="theme-switcher"
          @click="switchTheme"
          :class="{ active: currentTheme === 'theme-dark' }"
        >
          <div class="switch-path">
            <div class="switch-handle"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ListForm from "../lists/TodoForm";
export default {
  components: {
    ListForm,
  },
  computed: {
    currentTheme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    switchTheme() {
      this.$store.commit("switchTheme");
    },
  },
};
</script>
