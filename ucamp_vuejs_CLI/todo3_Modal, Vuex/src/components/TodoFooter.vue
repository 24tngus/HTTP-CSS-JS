<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
      clearTodo() {
         /* App에 event 보내는 대신 store에 저장된 메서드 직접 호출
          this.$emit('removeAllItemEvent');
        */
        this.$store.commit('removeAllItems');
      }
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