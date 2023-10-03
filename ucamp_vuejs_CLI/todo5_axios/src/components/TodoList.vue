<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- todoItems를 computed 속성의 getTodoItems로 변경 -->
      <li v-for="(todoItem, idx) in getTodoItems" :key="idx" class="shadow">
        <i class="fas fa-check checkBtn" :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete({todoItem, idx})"></i>
          <!-- toggleComplete(todoItem, idx)의 인자 타입을 toggleComplete({ todoItem, idx }) 객체로 수정 -->
        <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <!-- removeTodo(todoItem, idx)의 인자 타입을 removeTodo({ todoItem, idx }) 객체로 수정 -->
        <span class="removeBtn" @click="removeTodo({todoItem, idx})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
/* mapMutations를 import */
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
      /* spread operator 사용하여 mapMutations 선언
      removeTodo(todoItem, index) {
        this.$store.commit('removeOneItem', {todoItem, index});
      },
      */
     /* spread operator 사용하여 mapMutations 선언
      toggleComplete(todoItem, index) {
        this.$store.commit('toggleOneItem', {todoItem, index});
      }
      */
  },
  computed: {
    ...mapGetters(['getTodoItems'])
    /* 전개 연산자(spread operator)를 사용하여 mapGetters 선언
    todoItems() {
      return this.$store.getters.getTodoItems;
    }*/
  },
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
transition: all 1s;
}
.list-enter, .list-leave-to {
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