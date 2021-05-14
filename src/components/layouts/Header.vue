<template>
  <header>
    <h4>Task - {{ currentTheme }}</h4>
    <div class="action-btns">
      <button @click="showListForm" v-if="!listFormVisible">
        <i class="fas fa-plus-circle"></i>
      </button>
      <ListForm v-if="listFormVisible" />

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
  data() {
    return {
      listFormVisible: false,
    };
  },
  computed: {
    currentTheme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    showListForm() {
      this.listFormVisible = !this.listFormVisible;
    },
    switchTheme() {
      this.$store.commit("switchTheme");
    },
  },
};
</script>
