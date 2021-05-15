<template>
  <div
    v-if="listId === taskListId"
    class="list-task"
    :class="completed ? 'completed' : ''"
  >
    <h3 @click="changeCompleteStatus" :class="label" v-if="!isEditting">
      {{ name }}
    </h3>
    <form @submit.prevent="edit(id)" v-if="isEditting">
      <input type="text" v-model="newTaskName" :placeholder="name" required />
      <select name="label" id="label" v-model="newLabel">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button>Save</button>
    </form>
    <button @click="toggleEditForm" v-if="!isEditting">
      <i class="fas fa-pen"></i>
    </button>
    <button @click="toggleEditForm" v-else>Cancel</button>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "label", "completed", "listId", "taskListId"],
  data() {
    return {
      isEditting: false,
      newTaskName: "",
      newLabel: this.label,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksArray;
    },
  },
  methods: {
    changeCompleteStatus() {
      const currentTask = this.tasks.find((task) => task.id === this.id);
      if (!this.isEditting) {
        currentTask.completed = !currentTask.completed;
      }
    },
    toggleEditForm() {
      this.isEditting = !this.isEditting;
    },
    edit(id) {
      if (this.newTaskName !== "") {
        const taskObject = {
          id: id,
          label: this.newLabel,
          name: this.newTaskName,
        };

        this.$store.commit("editTask", taskObject);
        this.isEditting = false;
      }
    },
  },
};
</script>
