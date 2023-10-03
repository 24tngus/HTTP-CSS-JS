<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- TodoInput v-on 속성 삭제 
    <TodoInput v-on:addItemEvent="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- TodoList v-on 속성 삭제 
    <TodoList v-on:toggleItemEvent="toggleOneItem" v-on:removeItemEvent="removeOneItem"></TodoList>-->
    <TodoList></TodoList>
    <!-- TodoFooter v-on 속성 삭제 
    <TodoFooter v-on:removeAllItemEvent="removeAllItems"></TodoFooter>-->
    <TodoFooter></TodoFooter>
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
  methods: {
    /* 할 일 추가 메서드 store로 이동
    addOneItem: function(todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj)); 
      this.todoItems.push(obj);
    },
    */
   /* 할 일 삭제 메서드 store로 이동
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    */
   /* 할 일 완료 메서드 store로 이동
    toggleOneItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(this.todoItems[index]));
    },
    */
   /* 할 일 모두 삭제 메서드 store로 이동
    removeAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
    */
  }
}
</script>

<style src="@/assets/styles/styles.css">

</style>