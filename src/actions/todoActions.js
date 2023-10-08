import {
    ADD_TODO,
    CHANGED_FINISHED,
    ON_EDIT,
    ON_DELETE,
} from '../constants/actions';

export const addTodo = (inputText) => ({
    type: ADD_TODO,
    payload: { todoText: inputText },
});

export const changedFinish = (checked, id) => ({
    type: CHANGED_FINISHED,
    payload: { finish: checked, id },
});

export const onEdit = (editText, id) => ({
    type: ON_EDIT,
    payload: { todoText: editText, id },
});

export const onDelete = (id) => ({
    type: ON_DELETE,
    payload: { id },
});
