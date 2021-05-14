<template>
  <header>
    <img src="" alt="logo" />
    <div class="action-btns">
      <button @click="showListForm" v-if="!listFormVisible">Create</button>
      <ListForm v-if="listFormVisible" />

      <div class="theme-switcher-wrap">
        <div class="theme-switcher">
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
  methods: {
    showListForm() {
      this.listFormVisible = !this.listFormVisible;
    },
  },
};
</script>
