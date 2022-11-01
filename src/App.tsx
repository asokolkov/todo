import React from 'react';
import {TodoStore} from './stores/TodoStore';
import TodoList from './components/TodoList';
import {StoreContext} from './context/context';
import './styles/style.scss';

export const App = () => (
    <div>
        <StoreContext.Provider value={new TodoStore()}>
            <TodoList />
        </StoreContext.Provider>
    </div>
);