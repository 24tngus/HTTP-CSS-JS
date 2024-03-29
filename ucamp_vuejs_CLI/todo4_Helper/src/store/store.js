import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    /* getters 추가 */
    getters: {
        getTodoItems(state) {
            return state.todoItems;
        }
    },
    state: {
        todoItems: storage.fetch(),
    },
    mutations: {
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
    }
});