<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, idx) in getTodoItems" :key="idx" class="shadow">
        <i
          class="fas fa-check checkBtn"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleTodo(todoItem)"
        ></i>
        <!-- toggleComplete({todoItem, idx}객체를 toggleTodo(todoItem)로 변경 -->
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodoItem(todoItem)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
/* mapAcitions를 import */
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("loadTodoItems");
  },
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
    ...mapActions(["removeTodoItem"]),
    /* methods에 toggleTodo 추가 */
    toggleTodo(todoItem) {
      todoItem.completed = !todoItem.completed;
      this.$store.dispatch("toggleTodoItem", todoItem);
    },
  },
  computed: {
    ...mapGetters(["getTodoItems"]),
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>