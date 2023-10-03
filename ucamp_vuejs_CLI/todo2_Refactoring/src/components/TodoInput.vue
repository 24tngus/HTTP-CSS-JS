<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" ref="todoItem" @keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
  //LifeCycle Hook method
  mounted() {
      this.$refs.todoItem.focus();
  },
  data() {
      return {
          newTodoItem: ""
      }
  }, //data
  methods: {
      addTodo() {
          if (this.newTodoItem !== '') {
            this.$emit("addItemEvent", this.newTodoItem);
            /* app으로 이동 
              var todoObj = { completed: false, item: this.newTodoItem };
              localStorage.setItem(this.newTodoItem, JSON.stringify(todoObj)); */
              this.clearInput();
          }
      }, //addTodo
      clearInput() {
          this.newTodoItem = '';
      }, //clearTodo


  }, //methods
}
</script>

<style scoped>
input:focus {
  outline: none !important; 
  box-shadow: 0 0 0.4px #d6a8e9;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 75%;
  height: 50%;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>