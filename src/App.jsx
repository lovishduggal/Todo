import { useReducer, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import todoReducer from './reducers/todoReducer';
import TodoReducerContext from './context/TodoReducerContext';
function App() {
    const [list, dispatch] = useReducer(todoReducer, []);
    console.log(list);
    return (
        <TodoContext.Provider value={{ list }}>
            <TodoReducerContext.Provider value={{ dispatch }}>
                <AddTodo />
                <TodoList />
            </TodoReducerContext.Provider>
        </TodoContext.Provider>
    );
}

export default App;
