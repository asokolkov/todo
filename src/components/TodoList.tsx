import React from 'react';
import {TodoItem} from './TodoItem';
import {TodoStore} from '../stores/TodoStore';
import {Observer} from 'mobx-react-lite';


const TodoList = () => {
    const store = new TodoStore();

    return (
        <Observer>
            {() => (
                <div className="TodoList">
                    <h1>TodoList</h1>
                    <button className="l-button" onClick={() => store.toggleFilter()}>
                        {store.filter.getCurrentType()}
                    </button>
                    {Object.keys(store.activeTodos).map(id =>
                        <TodoItem key={id} id={id} store={store} />
                    )}
                    <button className="l-button" onClick={() => store.addTodo()}>
                        Add
                    </button>
                </div>
            )}
        </Observer>
    );
};

export default TodoList;