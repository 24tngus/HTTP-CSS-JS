const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    const { todoItem: { item }, index } = payload;
    localStorage.removeItem(item);
    state.todoItems.splice(index, 1);
}
const toggleOneItem = (state, payload) => {
    const { todoItem: { item, completed }, index } = payload;
    state.todoItems[index].completed = !completed;
    localStorage.removeItem(item);
    localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
}
const removeAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}
export { addOneItem, removeOneItem, toggleOneItem, removeAllItems }

/* 기존 코드
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
*/