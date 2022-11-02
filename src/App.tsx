import React from 'react';
import {TodoStore} from './stores/TodoStore';
import TodoList from './components/TodoList';
import {StoreContext} from './context/context';

export const App = () => (
    <div className="App">
        <StoreContext.Provider value={new TodoStore()}>
            <TodoList />
        </StoreContext.Provider>
    </div>
);