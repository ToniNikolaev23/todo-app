<template>
  <div class="list-wrap">
    <div class="list-box" v-for="(list, index) in lists" :key="list.id">
      <div class="list-name">
        <h2>
          <span>{{ list.name }}</span
          ><span
            ><button @click="editList"><i class="fas fa-edit"></i></button
            ><button @click="removeList(index)">
              <i class="fas fa-minus-circle"></i></button
          ></span>
        </h2>
      </div>
      <task-form :id="list.id" @add-task="addNewTask"></task-form>
      <task-list
        v-for="task in list['tasks']"
        :key="task.id"
        :name="task.name"
        :id="task.id"
        :listId="list.id"
        :completed="task.completed"
        :label="task.label"
        @change-status="changeStatus"
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
  data() {
    return {
      lists: [
        {
          id: "first",
          name: "First Task List",
          tasks: [
            {
              id: "task-one",
              name: "First task",
              completed: true,
              label: "high",
            },
            {
              id: "task-oneaaaa",
              name: "First task",
              completed: false,
              label: "high",
            },
            {
              id: "task-asdds",
              name: "First task",
              completed: true,
              label: "high",
            },
          ],
        },
        {
          id: "second",
          name: "Second Task List",
          tasks: [
            {
              id: "task-two",
              name: "Second Task",
              completed: false,
              label: "medium",
            },
          ],
        },
      ],
    };
  },
  computed: {
    completedArray() {
      return this.lists["tasks"] === true;
    },
  },
  methods: {
    addNewTask(value, id) {
      const currentList = this.lists.filter((list) => list.id === id);
      currentList[0].tasks.push(value);
    },
    changeStatus(id, listId) {
      const currentList = this.lists.filter((list) => list.id === listId);
      const currentTask = currentList[0].tasks.filter((task) => task.id === id);

      currentTask[0].completed = !currentTask[0].completed;
    },
    removeList(index) {
      this.lists.splice(index, 1);
    },
  },
};
</script>
