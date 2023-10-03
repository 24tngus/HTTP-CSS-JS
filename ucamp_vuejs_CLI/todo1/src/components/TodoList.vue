<template>
  <div>
    <ul>
        <!-- v-for directive를 사용하여 목록 렌더링 -->
        <!-- v-bind 생략 가능 -->
      <li v-for="(todoItem, idx) in todoItems" v-bind:key="idx" class="shadow">
        <!-- 완료 버튼 마크업 작업 -->
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
            v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">
            {{ todoItem.item }} 
        </span>
        <!-- 할 일 목록 & 삭제 버튼 마크업 작업 -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> 
            <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  /* life cycle method */
  /* push()로 로컬 스토리지의 모든 데이터를 todoitems에 저장 */
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
            var itemJson = localStorage.getItem(localStorage.key(i));
            /* JSON.parse()로 json string을 object로 변환 */
            this.todoItems.push(JSON.parse(itemJson));
        }
    }
  },
  /* localStorage의 데이터를 삭제하는 removeItem()
  배열의 특정 인덱스를 삭제하는 splice() 함수로 todo 삭제 */
  methods: {
    removeTodo: function(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
        const { item, completed } = todoItem;
        todoItem.completed = !completed;
        localStorage.removeItem(item);
        localStorage.setItem(item, JSON.stringify(todoItem));
        /* 상단과 동일
        todoItem.completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); */
    }
  }
};
</script>

<style scoped>
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