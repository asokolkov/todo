import React from 'react';
import {observer} from 'mobx-react-lite';
import {TodoListModel} from '../models/TodoListModel';
import {TodoItem} from './TodoItem';

type PropsTypes = {
    model: TodoListModel;
};

export const TodoList = observer(({model} : PropsTypes) => (
    <div>
        {model.list.map(todo => <TodoItem key={todo.id} model={todo} removeTodo={model.removeTodo} />)}
    </div>
));