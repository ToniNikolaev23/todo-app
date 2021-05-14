import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      lists: [
        {
          id: "default-id",
          name: "Default Task List",
          tasks: [
            {
              id: "default-task-id-1",
              name: "First default task",
              completed: false,
              label: "high",
              list_id: "default-id",
            },
          ],
        },
      ],
    };
  },
  mutations: {
    addNewList(state, payload) {
      state.lists.unshift(payload);
    },
  },
  getters: {
    listsArray(state) {
      return state.lists;
    },
  },
  actions: {},
  modules: {},
});
