<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addItemEvent="addOneItem"></TodoInput>
    <TodoList v-on:toggleItemEvent="toggleOneItem" v-on:removeItemEvent="removeOneItem" v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter v-on:removeAllItemEvent="removeAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
      return {
          todoItems: []
      }
  },
  created() {
      if (localStorage.length > 0) {
          for (var i = 0; i < localStorage.length; i++) {
              var itemJson = localStorage.getItem(localStorage.key(i));
              this.todoItems.push(JSON.parse(itemJson));
          }
      }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj)); 
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(this.todoItems[index]));
    },
    // TodoFooter에서 이동
    removeAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>

<style src="@/assets/styles/styles.css">

</style>