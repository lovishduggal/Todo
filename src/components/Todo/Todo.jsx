import { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import TodoReducerContext from '../../context/TodoReducerContext';
function Todo({ todoData, finished, id }) {
    const { list } = useContext(TodoContext);
    const { dispatch } = useContext(TodoReducerContext);
    const [finish, setFinish] = useState(finished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);

    return (
        <div>
            <input
                type="checkbox"
                checked={finish}
                onChange={(e) => {
                    setFinish(e.target.checked);
                    dispatch({
                        type: 'change_finished',
                        payload: { finish: e.target.checked, id },
                    });
                }}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => {
                        setEditText(e.target.value);
                    }}
                />
            ) : (
                todoData
            )}
            <button
                onClick={() => {
                    setIsEditing(!isEditing);
                    dispatch({
                        type: 'on_edit',
                        payload: { todoText: editText, id },
                    });
                }}>
                {!isEditing ? 'Edit' : 'Save'}
            </button>
            <button
                onClick={() =>
                    dispatch({ type: 'on_delete', payload: { id } })
                }>
                Delete
            </button>
        </div>
    );
}
export default Todo;
