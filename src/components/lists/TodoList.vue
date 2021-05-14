<template>
  <div class="list-wrap">
    <div class="list-box" v-for="(list, index) in lists" :key="list.id">
      <div class="list-name">
        <h2>
          {{ list.name }}
          <span
            ><button @click="editList"><i class="fas fa-edit"></i></button
            ><button @click="removeList(index)">
              <i class="fas fa-minus-circle"></i></button
          ></span>
        </h2>
      </div>
      <task-form :id="list.id"></task-form>
      <task-list
        v-for="task in tasks"
        :key="task.id"
        :taskListId="task.lists"
        :name="task.name"
        :id="task.id"
        :listId="list.id"
        :completed="task.completed"
        :label="task.label"
      ></task-list>
    </div>
  </div>
</template>

<script>
import TaskList from "../tasks/TaskList";
import TaskForm from "../tasks/TaskForm";
export default {
  components: {
    TaskList,
    TaskForm,
  },
  computed: {
    lists() {
      return this.$store.getters.listsArray;
    },
    tasks() {
      return this.$store.getters.tasksArray;
    },
  },
  methods: {
    removeList(index) {
      this.lists.splice(index, 1);
    },
  },
};
</script>
