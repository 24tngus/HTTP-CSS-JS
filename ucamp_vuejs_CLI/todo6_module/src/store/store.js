import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
/* todo를 import */
import todo from './modules/todo';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// const api_url = process.env.VUE_APP_APIURL;
// const todo_url = `${api_url}/todos`

// import * as getters from './getters';
// import * as mutations from './mutations';

export const store = new Vuex.Store({
    modules: {
        todo // todo: todo
    }
    /* todo.js로 이동
    state: {
        todoItems: Storage.fetch()
    },
    getters: {
        getters
    },
    mutations: {
        mutations
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
        toggleTodoItem(context, payload) {
            axios
                .patch(`${todo_url}/${payload.id}`, payload)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
    },
    */
});