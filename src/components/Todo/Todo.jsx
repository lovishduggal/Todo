import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Todo.css';

function Todo({ todoData, finished, id, changedFinish, onEdit, onDelete }) {
    const dispatch = useDispatch();
    const [finish, setFinish] = useState(finished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);

    return (
        <div className="todo-wrapper">
            <input className='checkbox'
                type="checkbox"
                checked={finish}
                onChange={(e) => {
                    setFinish(e.target.checked);
                    changedFinish(e.target.checked, id);
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
                <span> todoData</span>
            )}
            <button
                onClick={() => {
                    setIsEditing(!isEditing);
                    onEdit(editText, id);
                }}>
                {!isEditing ? 'Edit' : 'Save'}
            </button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}
export default Todo;
