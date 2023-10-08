import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import {
    addTodo,
    changedFinish,
    onEdit,
    onDelete,
} from './actions/todoActions';
import { bindActionCreators } from 'redux';

function App() {
    const list = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const actions = bindActionCreators(
        { addTodo, changedFinish, onEdit, onDelete },
        dispatch
    );
    console.log(list);
    return (
        <div className="main-wrapper">
            <h1
                style={{
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '2rem',
                }}>
                Todo List
            </h1>
            <AddTodo {...actions} />
            <TodoList actions={actions} />
        </div>
    );
}

export default App;
