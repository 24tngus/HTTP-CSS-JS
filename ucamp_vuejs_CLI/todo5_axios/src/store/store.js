import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const todo_url = 'http://localhost:4500/api/todos';

export const store = new Vuex.Store({
    state: {
        todoItems: []
    },
    getters: {
        getTodoItems(state) {
            return state.todoItems;
        }
    },
    actions: {
        loadTodoItems(context) {
            axios
                .get(`${todo_url}`)  //Promise
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
        addTodoItem(context, payload) {
            axios
                .post(`${todo_url}`, payload)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
        removeTodoItem(context, payload) {
            axios
                .delete(`${todo_url}/${payload.id}`)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
        removeAllTodoItems(context) {
            axios
                .delete(`${todo_url}`)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
        /* actions 프로퍼티의 toggleTodoItem() 에서 axios.put() 을 호출 */
        toggleTodoItem(context, payload) {
            axios
                .patch(`${todo_url}/${payload.id}`, payload)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
    },
    mutations: {
        setTodoItems(state, items) {
            state.todoItems = items;
        },
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            const { todoItem: { item }, index } = payload;
            localStorage.removeItem(item);
            state.todoItems.splice(index, 1);
        },
        toggleOneItem(state, payload) {
            const { todoItem: { item, completed }, index } = payload;
            state.todoItems[index].completed = !completed;
            localStorage.removeItem(item);
            localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
        },
        removeAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    },
});