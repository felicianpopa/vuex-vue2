import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos, // This is used in Todos.vue
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", response.data); // commits the response.data to the setTodos mutation
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos), // Updates the state
};

export default {
  state,
  getters,
  actions,
  mutations,
};
