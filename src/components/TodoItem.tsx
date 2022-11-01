import React from 'react';

type TodoType = {
    text: string;
    completed: boolean;
    focus: boolean;
};

type PropsTypes = {
    id: string;
    todo: TodoType;
    changeText: (key: string, text: string) => void;
    removeTodo: () => void;
};

export const TodoItem = ({id, todo, removeTodo, changeText}: PropsTypes) => {
    return (
        <div>
            <input
                onChange={(e) => changeText(id, e.target.value)}
                defaultValue={todo.text}
                autoFocus={todo.focus}
            />
            <button onClick={removeTodo}>x</button>
        </div>
    );
};