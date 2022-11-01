import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {TodoItem} from "./TodoItem";
import {StoreContext} from "../context/context";

const TodoList = () => {
    const store = useContext(StoreContext);

    return (
        <div>
            {Object.keys(store.todos).map(id => <TodoItem key={id} id={id} />)}
            <button onClick={() => store.addTodo()}>Add</button>
        </div>
    );
};

export default observer(TodoList);