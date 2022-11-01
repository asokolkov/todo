import {action, makeObservable, observable} from 'mobx';
import {v4 as uuid} from 'uuid';

type TodoType = {
    text: string;
    completed: boolean;
    focus: boolean;
};

type TodosType = {
    [id: string]: TodoType;
};

type FilterType = {
    type: string;
    func: (todo: TodoType) => boolean;
};

export class TodoStore {
    todos: TodosType = {
        '1': {text: 'Quit the job', completed: false, focus: false},
        '2': {text: 'Visit Amsterdam', completed: false, focus: false},
        '3': {text: 'Highlight mistakes', completed: false, focus: false}
    };
    activeTodos = this.todos;

    filters: FilterType[] = [
        {type: 'Completed', func: todo => todo.completed},
        {type: 'Not completed', func: todo => !todo.completed}
    ];
    currentFilter: FilterType = {type: 'No filter', func: () => true};

    placeholder = 'Input task';

    constructor () {
        makeObservable(this, {
            todos: observable,
            activeTodos: observable,
            filters: observable,
            currentFilter: observable,
            addTodo: action,
            removeTodo: action,
            changeText: action,
            toggleCompleted: action,
            toggleFilter: action
        });
    }

    addTodo(focus: boolean = true) {
        const todo = {text: '', completed: false, focus: focus, hidden: false};
        todo.hidden = this.currentFilter.func(todo);
        this.todos[uuid()] = todo;
    }

    removeTodo(id: string) {
        delete this.todos[id];
    }

    changeText(id: string, text: string) {
        this.todos[id].text = text;
    }

    toggleCompleted(id: string) {
        this.todos[id].completed = !this.todos[id].completed;
        this.activeTodos = Object.fromEntries(Object.entries(this.todos)
            .filter(([, todo]) => this.currentFilter.func(todo)));
    }

    toggleFilter() {
        const previousFilter = this.currentFilter;
        this.currentFilter = this.filters.pop()!;
        this.filters.unshift(previousFilter);
        this.activeTodos = Object.fromEntries(Object.entries(this.todos)
            .filter(([, todo]) => this.currentFilter.func(todo)));
    }
}