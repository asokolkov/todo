import {v4 as uuid} from 'uuid';

export default class TodoItemModel {
    id: string = uuid();
    text: string = '';
    done: boolean = false;

    constructor(text: string) {
        this.text = text;
    }

    toggleDone = () => this.done = !this.done;
}