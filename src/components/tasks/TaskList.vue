<template>
  <div
    v-if="listId === taskListId"
    class="list-task"
    @click="changeCompleteStatus"
    :class="completed ? 'completed' : ''"
  >
    <h3 :class="label">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "label", "completed", "listId", "taskListId"],
  computed: {
    tasks() {
      return this.$store.getters.tasksArray;
    },
  },
  methods: {
    changeCompleteStatus() {
      const currentTask = this.tasks.find((task) => task.id === this.id);
      currentTask.completed = !currentTask.completed;
    },
  },
};
</script>
