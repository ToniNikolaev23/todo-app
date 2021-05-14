<template>
  <form @submit.prevent="addTask">
    <input type="text" v-model="newTaskName" placeholder="Add new task" />

    <select name="label" id="label" v-model="newLabel">
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Important">Important</option>
    </select>
    <button>Create</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      newTaskName: "",
      newLabel: "Easy",
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: "test-id",
        name: this.newTaskName,
        completed: false,
        label: this.newLabel,
      };

      this.$emit("addTask", newTask, this.id);
    },
  },
};
</script>
