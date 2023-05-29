import { task } from "./task"

export type column = {
  [id: string]: {
    name: string
    tasks: task[]
  }
}