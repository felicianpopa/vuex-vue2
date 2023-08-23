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

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`); // Removes from the BE

    commit("removeTodo", id); // updates the state by using the removeTodo mutation
  },

  async filterTodos({ commit }, limit) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit("setTodos", response.data); // No need for a new mutation
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos), // Updates the state
  newTodo: (state, todo) => state.todos.unshift(todo), // Push the new todo to the state.todos
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
