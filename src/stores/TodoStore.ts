import {makeAutoObservable} from 'mobx';
import {v4 as uuid} from 'uuid';
import {TodosType} from '../types/todosTypes';
import {TodoFilter} from './TodoFilter';

export class TodoStore {
    todos: TodosType = {
        '1': {text: 'Quit the job', completed: false},
        '2': {text: 'Visit Amsterdam', completed: false},
        '3': {text: 'Highlight mistakes', completed: false}
    };
    activeTodos = this.todos;

    filter = new TodoFilter();

    placeholder = 'Input task';

    constructor () {
        makeAutoObservable(this);
    }

    shouldFocus(id: string) {
        const lastTodoId = Object.keys(this.todos).pop();
        return id === lastTodoId && this.todos[lastTodoId].text === '';
    }

    addTodo() {
        const id = uuid();
        const todo = {text: '', completed: false};
        this.todos[id] = todo;
        this.activeTodos[id] = todo;
        this.filter.setFirst();
        this.updateActiveTodos();
    }

    removeTodo(id: string) {
        delete this.activeTodos[id];
        delete this.todos[id];
    }

    changeText(id: string, text: string) {
        this.todos[id].text = text;
    }

    toggleCompleted(id: string) {
        this.todos[id].completed = !this.todos[id].completed;
        this.updateActiveTodos();
    }

    toggleFilter() {
        this.filter.next();
        this.updateActiveTodos();
    }

    updateActiveTodos() {
        this.activeTodos = Object.fromEntries(Object.entries(this.todos)
            .filter(([, todo]) => this.filter.check(todo)));
    }
}