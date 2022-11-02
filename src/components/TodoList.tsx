import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {TodoItem} from './TodoItem';
import {StoreContext} from '../context/context';

const TodoList = () => {
    const store = useContext(StoreContext);

    return (
        <div className="TodoList">
            <h1>TodoList</h1>
            <button className="l-button" onClick={() => store.toggleFilter()}>
                {store.filter.getCurrentType()}
            </button>
            {Object.keys(store.activeTodos).map(id => <TodoItem key={id} id={id} />)}
            <button className="l-button" onClick={() => store.addTodo()}>
                Add
            </button>
        </div>
    );
};

export default observer(TodoList);