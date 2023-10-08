import { useState } from 'react';
import './AddTodo.css';
function AddTodo({ addTodo }) {
    const [inputText, setInputText] = useState('');
    return (
        <div className="add-todo-wrapper">
            <input
                type="text"
                value={inputText}
                placeholder="Add next todo"
                onChange={(e) => {
                    setInputText(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    addTodo(inputText);
                    setInputText('');
                }}>
                Add
            </button>
        </div>
    );
}
export default AddTodo;
