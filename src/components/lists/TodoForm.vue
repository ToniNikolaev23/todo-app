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
    };
  },
  methods: {
    addNewList() {
      console.log(this.newListName);
    },
  },
};
</script>
