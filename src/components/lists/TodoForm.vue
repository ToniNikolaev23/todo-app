<template>
  <form @submit.prevent="addNewList" class="todo-form">
    <input
      type="text"
      name="todo-name"
      v-model.trim="newListName"
      placeholder="Enter your ToDo list name:"
      class="todo-name"
      required
    />
    <button><i class="fas fa-plus-circle"></i></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newListName: "",
      uid: 0,
    };
  },
  methods: {
    addNewList() {
      if (this.newListName === "") {
        return null;
      }
      const listObj = {
        id: "list-" + this.uid,
        name: this.newListName,
      };
      this.$store.commit("addNewList", listObj);
      this.uid++;
      this.newListName = "";
    },
  },
};
</script>
