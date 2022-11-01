import {action, makeObservable, observable} from "mobx";
import {v4 as uuid} from 'uuid';

type TodoType = {
    text: string;
    completed: boolean;
    focus: boolean;
};

type TodosType = {
    [id: string]: TodoType;
};

export class TodoStore {
    todos: TodosType = {
        '1': {text: 'Quit the job', completed: false, focus: false},
        '2': {text: 'Visit Amsterdam', completed: false, focus: false},
        '3': {text: 'Highlight mistakes', completed: false, focus: false}
    };

    constructor () {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            removeTodo: action,
            changeText: action
        });
    }

    addTodo(text: string, focus: boolean) {
        this.todos[uuid()] = {text: text, completed: false, focus: focus};
    }

    removeTodo(id: string) {
        delete this.todos[id];
    }

    changeText(id: string, text: string) {
        this.todos[id].text = text;
    }
}