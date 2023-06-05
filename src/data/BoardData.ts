import { column } from "../types/column";
import { v4 as uuidv4 } from 'uuid';
import TodoTasks from "./TodoTasks";
import DoingTasks from "./DoingTasks";
import DoneTasks from "./DoneTasks";

export const BoardData: column = {
  [uuidv4()]: {
    name: 'Todo',
    tasks: TodoTasks
  },
  [uuidv4()]: {
    name: 'Doing',
    tasks: DoingTasks
  },
  [uuidv4()]: {
    name: 'Done',
    tasks: DoneTasks
  }
}