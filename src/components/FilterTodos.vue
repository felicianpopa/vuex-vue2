import { mapActions } from 'vuex';
<template>
  <div>
    Filter todos:
    <select v-model="filterTodosSelect.defaultValue" @change="onChange">
      <option
        v-for="optionValue in filterTodosSelect.filters"
        :key="optionValue"
        :value="optionValue"
      >
        {{ optionValue }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"; // maps getters from Vuex
export default {
  name: "FilterTodos",

  computed: mapGetters(["filterTodosSelect"]),
  methods: {
    ...mapActions(["fetchTodos"]),
    onChange() {
      this.fetchTodos();
    },
  },
};
</script>

<style></style>
