function todoReducer(state = [], action) {
    if (action.type === 'add_todo') {
        let todo = action.payload.todoText;
        return [
            ...state,
            {
                id: state.length + 1,
                todoData: todo,
                finished: false,
            },
        ];
    } else if (action.type === 'change_finished') {
        let finish = action.payload.finish;
        const id = action.payload.id;
        const updatedList = state.map((t) => {
            if (t.id === id) t.finished = finish;
            return t;
        });
        return updatedList;
    } else if (action.type === 'on_delete') {
        const id = action.payload.id;
        const updatedList = state.filter((t) => t.id !== id);
        return updatedList;
    } else if (action.type === 'on_edit') {
        let todo = action.payload.todoText;
        const id = action.payload.id;
        const updatedList = state.map((t) => {
            if (t.id === id) {
                t.todoData = todo;
            }
            return t;
        });
        return updatedList;
    } else {
        return state;
    }
}
export default todoReducer;
