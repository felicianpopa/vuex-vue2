import { mapActions } from 'vuex';
<template>
  <div>
    Filter todos:
    <select v-model="limit" @change="onChange">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex"; // maps getters from Vuex
export default {
  name: "FilterTodos",
  data() {
    return {
      limit: 200,
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
    onChange() {
      console.warn(this.limit);
      this.filterTodos(this.limit);
    },
  },
};
</script>

<style></style>
