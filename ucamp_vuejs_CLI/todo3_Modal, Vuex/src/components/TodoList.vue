<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, idx) in this.$store.state.todoItems" :key="idx" class="shadow">
        <i class="fas fa-check checkBtn" :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete(todoItem, idx)"></i>
        <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, idx)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
      removeTodo(todoItem, index) {
        /* App에 event 보내는 대신 store에 저장된 메서드 직접 호출
        this.$emit('removeItemEvent', todoItem, index);
        */
        this.$store.commit('removeOneItem', {todoItem, index});
      },
      toggleComplete(todoItem, index) {
        /* App에 event 보내는 대신 store에 저장된 메서드 직접 호출
        this.$emit('toggleItemEvent', todoItem);
        */
        this.$store.commit('toggleOneItem', {todoItem, index});
      }
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