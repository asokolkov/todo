import React from 'react';
import {TodoStore} from "../stores/TodoStore";
import {observer} from "mobx-react-lite";
import {TodoItem} from "./TodoItem";

type PropsTypes = {
    store: TodoStore;
};

const TodoList = ({store} : PropsTypes) => {
    return (
        <div>
            {Object.entries(store.todos).map(([id, todo]) => (
                <TodoItem
                    key={id}
                    id={id}
                    todo={todo}
                    removeTodo={() => store.removeTodo(id)}
                    changeText={(id, text) => store.changeText(id, text)}
                />
            ))}
            <button onClick={() => store.addTodo('awdawd', true)}>Add</button>
        </div>
    );
};

export default observer(TodoList);