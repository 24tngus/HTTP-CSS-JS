<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
/* mapMutations를 import */
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clearTodo: 'removeAllItems'
      }),
      /* pread operator 사용하여 mapMutations 선언
      clearTodo() {
        this.$store.commit('removeAllItems');
      }
      */
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