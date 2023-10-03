<template>
    <div class="inputBox shadow">
        <!--input 박스에서 enter 입력했을 때도 todo 추가되도록 v-on:keyup.enter 이벤트 처리 -->
        <!-- v-on:keyup.enter과 @keyup.enter 동일 -->
        <input type="text" v-model="newTodoItem" ref="todoItem" @keyup.enter="addTodo">
      <!--awesome 아이콘 이용해 직관적인 버튼 생성-->
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    /* $refs는 document.getElementById(id) 함수처럼 html DOM에 직접 접근할 때 사용하는 객체
        ref = "todoItem"의 ref 속성은 기존의 id 속성과 동일한 속성 */
    mounted() {
        this.$refs.todoItem.focus();
    },
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
      addTodo: function () {
        if (this.newTodoItem !== "") {
            /* toggleComplete() 메서드를 위한 객체 추가 */
            var obj = {completed: false, item: this.newTodoItem};
            /* 입력 받은 텍스트를 localStorage의 setItem() API를 이용하여 저장 
            JSON.stringify()로 object를 json string으로 변환*/
          localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // setItem(key, value)
          this.clearInput();
        }
      },
      clearInput: function () {
        this.newTodoItem = ""; // newTodoitem 변수 초기화
      },
    },
  };
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
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>