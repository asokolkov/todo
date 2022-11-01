import TodoItemModel from '../models/TodoItemModel';

type PropsTypes = {
    model: TodoItemModel;
    removeTodo: (todo: TodoItemModel) => void;
};

export const TodoItem = ({model, removeTodo}: PropsTypes) => {
    return (
        <div>
            <input type="checkbox" onClick={model.toggleDone} />
            <p>{model.text}</p>
            <button onClick={() => removeTodo(model)}>x</button>
        </div>
    )
};