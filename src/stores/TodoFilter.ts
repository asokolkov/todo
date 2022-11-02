import {FilterType} from '../enums/filterType';
import {TodoType} from '../types/todoType';


export class TodoFilter {
    private currentIndex = 0;

    private filters = [
        {type: FilterType.NO_FILTER, func: () => true},
        {type: FilterType.COMPLETED, func: (todo: TodoType) => todo.completed},
        {type: FilterType.NOT_COMPLETED, func: (todo: TodoType) => !todo.completed}
    ];

    check(todo: TodoType) {
        return this.filters[this.currentIndex].func(todo);
    }

    next() {
        this.currentIndex++;
        this.currentIndex %= this.filters.length;
    }

    setFirst() {
        this.currentIndex = 0;
    }

    getCurrentType() {
        return this.filters[this.currentIndex].type;
    }
}