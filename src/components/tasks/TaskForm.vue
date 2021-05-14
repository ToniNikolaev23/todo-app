<template>
  <form @submit.prevent="addTask">
    <input
      type="text"
      v-model="newTaskName"
      placeholder="Add new task"
      required
    />

    <select name="label" id="label" v-model="newLabel">
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="important">Important</option>
    </select>
    <button><i class="fas fa-plus-circle"></i></button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      newTaskName: "",
      newLabel: "easy",
      uid: 0,
    };
  },
  computed: {
    lists() {
      return this.$store.getters.listsArray;
    },
  },
  methods: {
    addTask() {
      const currentList = this.lists.find((list) => list.id === this.id);
      const newTask = {
        id: "task-" + currentList.id + this.uid,
        name: this.newTaskName,
        completed: false,
        label: this.newLabel,
        lists: currentList.id,
      };

      this.$store.commit("addNewTask", newTask);

      this.uid++;

      this.newTaskName = "";
      this.newLabel = "easy";
    },
  },
};
</script>
