import { task } from "./task"

export type column = {
  name: 'Todo' | 'Doing' | 'Done'
  tasks: task[]
}