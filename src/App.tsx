import React from 'react';
import {TodoList} from './components/TodoList';
import {TodoListModel} from './models/TodoListModel';

const App = () => {
    const todoListModel = new TodoListModel(['Todo 1', 'Todo 2']);

    return (
        <div>
            <TodoList model={todoListModel} />
        </div>
    );
};

export default App;