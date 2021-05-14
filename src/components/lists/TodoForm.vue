<template>
  <form @submit.prevent="addNewList" class="todo-form">
    <input
      type="text"
      name="todo-name"
      v-model="newListName"
      placeholder="Enter your ToDo list name:"
    />
    <button>Create</button>
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
      const listObj = {
        id: "list-" + this.uid,
        name: this.newListName,
        tasks: [],
      };

      console.log(listObj);
      this.$store.commit("addNewList", listObj);
      this.uid++;
      this.newListName = "";
    },
  },
};
</script>
