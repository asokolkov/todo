export default class TodoItemModel {
    id: string = '';
    text: string = '';
    done: boolean = false;

    constructor(text: string) {
        this.id = Math.random().toString();
        this.text = text;
    }

    toggleDone = () => {
        this.done = !this.done
    }
}