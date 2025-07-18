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
    state: {
        todoItems: storage.fetch(),
    },
    /* mutations 속성 추가 */
    mutations: {
         /* 할 일 추가 */
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
         /* 할 일 삭제 */
        removeOneItem(state, payload) {
            const { todoItem: { item }, index } = payload;
            localStorage.removeItem(item);
            state.todoItems.splice(index, 1);
            /*
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
            */
        },
        /* 할 일 완료 */
        toggleOneItem(state, payload) {
            const { todoItem: { item, completed }, index } = payload;

            state.todoItems[index].completed = !completed;
            localStorage.removeItem(item);
            localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
            /*
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
            */
        },
        /* 할 일 모두 삭제 */
        removeAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    }
});