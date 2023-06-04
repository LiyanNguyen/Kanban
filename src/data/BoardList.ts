
import { v4 as uuidv4 } from 'uuid';
import TodoTasks from "./TodoTasks";
import { board } from '../types/board';

export const BoardList: board[] = [
  {
    id: uuidv4(),
    name: 'Platform Launch',
    data: {
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
    },
  },
  {
    id: uuidv4(),
    name: 'Marketing Plan',
    data: {
      [uuidv4()]: {
        name: 'Todo',
        tasks: []
      },
      [uuidv4()]: {
        name: 'Doing',
        tasks: TodoTasks
      },
      [uuidv4()]: {
        name: 'Done',
        tasks: []
      }
    },
  },
  {
    id: uuidv4(),
    name: 'Roadmap',
    data: {
      [uuidv4()]: {
        name: 'Todo',
        tasks: []
      },
      [uuidv4()]: {
        name: 'Doing',
        tasks: []
      },
      [uuidv4()]: {
        name: 'Done',
        tasks: TodoTasks
      }
    },
  },
]