import { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
function Todo({ todoData, finished, id }) {
    const { list, setList } = useContext(TodoContext);
    const [finish, setFinish] = useState(finished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);

    const changeFinished = (finish) => {
        const updatedList = list.map((t) => {
            if (t.id === id) t.finished = finish;
            return t;
        });
        setList(updatedList);
    };

    const onDelete = () => {
        const updatedList = list.filter((t) => t.id !== id);
        setList(updatedList);
    };

    const onEdit = (todoText) => {
        const updatedList = list.map((t) => {
            if (t.id === id) {
                t.todoData = todoText;
            }
            return t;
        });
        setList(updatedList);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={finish}
                onChange={(e) => {
                    setFinish(e.target.checked);
                    changeFinished(e.target.checked);
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
                    onEdit(editText);
                }}>
                {!isEditing ? 'Edit' : 'Save'}
            </button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}
export default Todo;
