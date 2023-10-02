import Todo from '../Todo/Todo';

function TodoList({ list, updateList }) {
    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        todoData={todo.todoData}
                        finished={todo.finished}
                        updateList={updateList}
                        changeFinished={(finish) => {
                            const updatedList = list.map((t) => {
                                if (t.id === todo.id) todo.finished = finish;
                                return t;
                            });
                            updateList(updatedList);
                        }}
                    />
                ))}
        </div>
    );
}
export default TodoList;
