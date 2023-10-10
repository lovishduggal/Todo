import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todoText = action.payload.todoText;
            state.push({
                id: state.length + 1,
                todoData: todoText,
                finished: false,
            });
        },
        onEdit: (state, action) => {
            let todo = action.payload.todoText;
            const id = action.payload.id;
            state = state.map((t) => {
                if (t.id === id) {
                    t.todoData = todo;
                }
                return t;
            });
        },
        changedFinish: (state, action) => {
            let finish = action.payload.finish;
            const id = action.payload.id;
            state = state.map((t) => {
                if (t.id === id) t.finished = finish;
                return t;
            });
        },
        onDelete: (state, action) => {
            const id = action.payload.id;
            console.log(state, id);
            state = state.filter((t) => t.id !== id);
        },
    },
});
export const { addTodo, onEdit, changedFinish, onDelete } = todoSlice.actions;
export default todoSlice.reducer;
