import { mapActions } from 'vuex';
<template>
  <div>
    Filter todos:
    <select v-model="filterTodosSelect.value">
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
import { mapGetters } from "vuex"; // maps getters from Vuex
export default {
  name: "FilterTodos",

  computed: mapGetters(["filterTodosSelect"]),
};
</script>

<style></style>
