<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader, // 'TodoHheader' : TodoHeader와 동일
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {}
  }
};
</script>

<style src="@/assets/styles/styles.css">

</style>