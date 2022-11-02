import React, {useContext} from 'react';
import {StoreContext} from '../context/context';
import {TodoItemPropsTypes} from '../types/todoItemPropsTypes';

export const TodoItem = ({id}: TodoItemPropsTypes) => {
    const store = useContext(StoreContext);

    return (
        <div className="TodoItem">
            <input
                type="checkbox"
                checked={store.todos[id].completed}
                onChange={() => store.toggleCompleted(id)}
            />
            <input
                type="text"
                onChange={e => store.changeText(id, e.target.value)}
                defaultValue={store.todos[id].text}
                placeholder={store.placeholder}
                autoFocus={store.todos[id].focus}
            />
            <button className="s-button" onClick={() => store.removeTodo(id)}>x</button>
        </div>
    );
};