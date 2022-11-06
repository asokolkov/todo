import {makeAutoObservable} from 'mobx';
import {v4 as uuid} from 'uuid';
import {TodosType} from '../types/todosTypes';
import {TodoFilter} from './TodoFilter';
import {plug} from '../other/plug';
import Cookies from 'js-cookie';


export class TodoStore {
    todos: TodosType;
    activeTodos: TodosType;
    filter = new TodoFilter();
    cookiesId: string;

    constructor(cookiesId: string) {
        makeAutoObservable(this);
        this.cookiesId = cookiesId;
        const todoCookies = Cookies.get(cookiesId);
        this.todos = todoCookies ? JSON.parse(todoCookies) : plug;
        this.activeTodos = this.todos;
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
        this.saveCookies();
    }

    changeText(id: string, text: string) {
        this.todos[id].text = text;
        this.saveCookies();
    }

    toggleCompleted(id: string) {
        this.todos[id].completed = !this.todos[id].completed;
        this.saveCookies();
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

    saveCookies() {
        const filledTodos = Object.fromEntries(Object.entries(this.todos)
            .filter(([, todo]) => todo.text));
        Cookies.set(this.cookiesId, JSON.stringify(filledTodos));
    }
}
