import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      lists: [
        {
          id: "default-id",
          name: "Default Task List",
        },
      ],
      tasks: [
        {
          id: "default-task-id-1",
          name: "First default task",
          completed: false,
          label: "high",
          lists: "default-id",
        },
      ],
      currentTheme: localStorage.getItem("theme-color"),
    };
  },
  mutations: {
    addNewList(state, payload) {
      console.log(payload);
      localStorage.setItem(payload.id, payload.name);
      state.lists.unshift(payload);
    },
    editListName(state, payload) {
      const currentList = state.lists.find((list) => list.id === payload.el);
      currentList.name = payload.name;
    },
    addNewTask(state, payload) {
      state.tasks.push(payload);
    },
    editTask(state, payload) {
      const currentTask = state.tasks.find((task) => task.id === payload.id);
      currentTask.name = payload.name;
      currentTask.label = payload.label;
    },
    switchTheme(state) {
      const storedTheme = localStorage.getItem("theme-color");
      if (storedTheme === "theme-dark") {
        localStorage.setItem("theme-color", "theme-light");
        state.currentTheme = localStorage.getItem("theme-color");
      } else {
        localStorage.setItem("theme-color", "theme-dark");
        state.currentTheme = localStorage.getItem("theme-color");
      }
    },
  },
  getters: {
    listsArray(state) {
      return state.lists;
    },
    tasksArray(state) {
      return state.tasks;
    },
    getTheme(state) {
      return state.currentTheme;
    },
  },
});
