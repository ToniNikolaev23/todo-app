<template>
  <div class="list-wrap">
    <div class="list-box" v-for="(list, index) in lists" :key="list.id">
      <todo-box :index="index" :id="list.id" :name="list.name"></todo-box>
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
import TodoBox from "../lists/TodoBox";
export default {
  components: {
    TaskList,
    TaskForm,
    TodoBox,
  },
  computed: {
    lists() {
      return this.$store.getters.listsArray;
    },
    tasks() {
      return this.$store.getters.tasksArray;
    },
  },
};
</script>
