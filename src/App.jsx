import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
    const [list, setList] = useState([
        {
            id: 1,
            todoData: 'todo 1',
            finished: false,
        },
        {
            id: 2,
            todoData: 'todo 2',
            finished: false,
        },
    ]);
    const cb = (todo) =>
        setList([
            ...list,
            {
                id: list.length + 1,
                todoData: todo,
                finished: false,
            },
        ]);
    return (
        <>
            <AddTodo updateList={cb} />
            <TodoList list={list} updateList={setList} /> //* start from here.
            {console.log(list)}
        </>
    );
}

export default App;
