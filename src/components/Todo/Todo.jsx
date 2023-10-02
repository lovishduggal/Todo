import { useState } from 'react';

function Todo({ todoData, finished, changeFinished }) {
    const [finish, setFinish] = useState(finished);
    return (
        <div>
            <input
                type="checkbox"
                checked={finish}
                onChange={(e) => {
                    console.log(e.target);
                    setFinish(e.target.checked);
                    changeFinished(e.target.checked);
                }}
            />
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}
export default Todo;
