import TodoItemModel from './TodoItemModel';
import {makeAutoObservable} from 'mobx';

export class TodoListModel {
    list: TodoItemModel[] = [];

    constructor(todos: string[]) {
        makeAutoObservable(this);
        todos.forEach(this.addTodo);
    }

    addTodo = (text: string) => this.list.push(new TodoItemModel(text));

    removeTodo = (todo: TodoItemModel) => this.list = this.list.filter(x => x !== todo);
}