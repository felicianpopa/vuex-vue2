import { mapActions } from 'vuex';
<template>
  <div>
    Filter todos:
    <select v-model="filterTodosSelectGetter.value">
      <option
        v-for="optionValue in filterTodosSelectGetter.filters"
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

  computed: mapGetters(["filterTodosSelectGetter"]),
};
</script>

<style></style>
