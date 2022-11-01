import {TodoType} from './todoType';

export type FilterType = {
    type: string;
    func: (todo: TodoType) => boolean;
};