import {makeAutoObservable} from 'mobx';
import {v4 as uuid} from 'uuid';
import {FilterType} from '../enums/filterType';
import {TodosType} from '../types/todosTypes';
import {FiltersTypes} from '../types/filtersTypes';

export class TodoStore {
    todos: TodosType = {
        '1': {text: 'Quit the job', completed: false, focus: false},
        '2': {text: 'Visit Amsterdam', completed: false, focus: false},
        '3': {text: 'Highlight mistakes', completed: false, focus: false}
    };
    activeTodos = this.todos;

    filters: FiltersTypes = {
        current: {type: FilterType.NO_FILTER, func: () => true},
        other: [
            {type: FilterType.COMPLETED, func: todo => todo.completed},
            {type: FilterType.NOT_COMPLETED, func: todo => !todo.completed}
        ]
    };

    placeholder = 'Input task';

    constructor () {
        makeAutoObservable(this);
    }

    addTodo(focus: boolean = true) {
        const id = uuid();
        const todo = {text: '', completed: false, focus: focus};
        this.todos[id] = todo;
        this.activeTodos[id] = todo;
        while (this.filters.current.type !== FilterType.NO_FILTER) this.toggleFilter();
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
        this.redrawActiveTodos();
    }

    toggleFilter() {
        const previousFilter = this.filters.current;
        this.filters.current = this.filters.other.pop()!;
        this.filters.other.unshift(previousFilter);
        this.redrawActiveTodos();
    }

    redrawActiveTodos() {
        this.activeTodos = Object.fromEntries(Object.entries(this.todos)
            .filter(([, todo]) => this.filters.current.func(todo)));
    }
}