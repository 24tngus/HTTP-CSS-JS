<template>
  <div class="clearAllContainer">
    <!-- clearTodo를 removeAllTodoItems로 변경 -->
      <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
/* mapActions를 import*/
import { mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clearTodo: 'removeAllItems'
    }),
    /* mapActions 추가 */
    ...mapActions(['removeAllTodoItems']), 
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>