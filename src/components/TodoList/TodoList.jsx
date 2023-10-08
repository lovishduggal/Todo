import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';
function TodoList({ actions }) {
    const list = useSelector((state) => state.todo);
    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        {...actions}
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
