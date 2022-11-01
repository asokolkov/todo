import React, {useContext} from 'react';
import {StoreContext} from "../context/context";

type PropsTypes = {
    id: string;
};

export const TodoItem = ({id}: PropsTypes) => {
    const store = useContext(StoreContext);

    return (
        <div>
            <input
                type="checkbox"
                checked={store.todos[id].completed}
                onChange={() => store.toggleCompleted(id)}
            />
            <input
                onChange={e => store.changeText(id, e.target.value)}
                defaultValue={store.todos[id].text}
                placeholder={store.placeholder}
                autoFocus={store.todos[id].focus}
            />
            <button onClick={() => store.removeTodo(id)}>x</button>
        </div>
    );
};