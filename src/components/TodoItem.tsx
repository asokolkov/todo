import React from 'react';
import {TodoItemPropsTypes} from '../types/todoItemPropsTypes';


export const TodoItem = ({id, store}: TodoItemPropsTypes) => {
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
                placeholder="Input task"
                autoFocus={store.shouldFocus(id)}
            />
            <button className="s-button" onClick={() => store.removeTodo(id)}>x</button>
        </div>
    );
};