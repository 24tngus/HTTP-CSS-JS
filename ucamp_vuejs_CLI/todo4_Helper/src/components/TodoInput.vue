<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" ref="todoItem" @keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>
      <MyModal v-if="showModal" @close="showModal = false">
          <h3 slot="header">
              경고!
              <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
          </h3>
          <div slot="body">
              아무것도 입력하지 않으셨습니다.
          </div>
      </MyModal>
  </div>
</template>

<script>
import MyModal from '@/components/common/MyModal.vue';

export default {
  mounted() {
      this.$refs.todoItem.focus();
  },
  data() {
      return {
          newTodoItem: "",
          showModal: false
      }
  }, //data
  components: {
      MyModal
  }, 
  methods: {
      addTodo() {
          if (this.newTodoItem !== '') {
            /* App에 event 보내는 대신 store에 저장된 메서드 직접 호출
             this.$emit('addTodoEvent', this.newTodoItem);
             */
              this.$store.commit('addOneItem', this.newTodoItem);
              this.clearInput();
          } else {
              this.showModal = !this.showModal;
          }
      }, 
      clearInput() {
          this.newTodoItem = '';
      }, 
  }, 
}
</script>

<style scoped>
i {
  cursor: pointer;
}
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

.closeModalBtn {
  color: #42b983;
}
</style>