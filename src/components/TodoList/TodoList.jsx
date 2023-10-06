import Todo from '../Todo/Todo';
import TodoContext from '../../context/TodoContext';
import { useContext } from 'react';
function TodoList() {
    const { list } = useContext(TodoContext);
    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        todoData={todo.todoData}
                        finished={todo.finished}
                        id={todo.id}
                    />
                ))}
        </div>
    );
}
export default TodoList;
