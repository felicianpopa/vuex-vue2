import axios from "axios";

const state = {
  todos: [
    {
      title: "first todo",
      id: 1,
    },
  ],
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

  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );

    commit("newTodo", response.data); // commits the response.data to the newTodo mutation
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos), // Updates the state
  newTodo: (state, todo) => state.todos.unshift(todo), // Push the new todo to the state.todos
};

export default {
  state,
  getters,
  actions,
  mutations,
};
