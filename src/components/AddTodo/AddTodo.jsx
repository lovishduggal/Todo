import { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import TodoReducerContext from '../../context/TodoReducerContext';
function AddTodo() {
    const [inputText, setInputText] = useState('');
    const { dispatch } = useContext(TodoReducerContext);
    return (
        <div>
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
                    dispatch({
                        type: 'add_todo',
                        payload: { todoText: inputText },
                    });
                    setInputText('');
                }}>
                Add
            </button>
        </div>
    );
}
export default AddTodo;
