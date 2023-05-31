import { column } from "../types/column";
import { v4 as uuidv4 } from 'uuid';
import TodoTasks from "./TodoTasks";

export const BoardData: column = {
  [uuidv4()]: {
    name: 'Todo',
    tasks: TodoTasks
  },
  [uuidv4()]: {
    name: 'Doing',
    tasks: []
  },
  [uuidv4()]: {
    name: 'Done',
    tasks: []
  }
}