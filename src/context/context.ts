import { createContext } from 'react';
import {TodoStore} from "../stores/TodoStore";

export const StoreContext = createContext<TodoStore>(new TodoStore());