<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- TodoInput v-on 속성 삭제 
    <TodoInput v-on:addItemEvent="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- TodoList v-on 속성 삭제 
    <TodoList v-on:toggleItemEvent="toggleOneItem" v-on:removeItemEvent="removeOneItem"></TodoList>-->
    <TodoList></TodoList>
    <!-- TodoFooter v-on 속성 삭제 
    <TodoFooter v-on:removeAllItemEvent="removeAllItems"></TodoFooter>-->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'
/* Vuex Helper */
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
      return {
          todoItems: []
      }
  },
  /* Vuex Helper */
  computed: 
    { ...mapState(['num']), ...mapGetters(['countedNum']) },
  methods:
    { ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn']) }

}
</script>

<style src="@/assets/styles/styles.css">

</style>