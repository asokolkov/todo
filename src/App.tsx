import React from 'react';
import {TodoStore} from "./stores/TodoStore";
import TodoList from "./components/TodoList";

export const App = () => {
    const store = new TodoStore();

    return (
        <div>
            <TodoList store={store} />
        </div>
    );
};