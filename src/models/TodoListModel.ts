import TodoItemModel from "./TodoItemModel";
import {makeAutoObservable} from "mobx";

export class TodoListModel {
    list: TodoItemModel[] = [];

    constructor(todos: string[]) {
        makeAutoObservable(this);
        todos.forEach(this.addTodo);
    }

    toggleTodo = (todo: TodoItemModel) => todo.done = !todo.done;

    addTodo = (text: string) => {
        this.list.push(new TodoItemModel(text));
    }

    removeTodo = (todo: TodoItemModel) => {
        const index = this.list.indexOf(todo);
        if (index !== -1) this.list.splice(index, 1);
    };
}