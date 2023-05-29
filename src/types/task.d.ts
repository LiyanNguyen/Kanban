import { subtask } from "./subtask"

export type task = {
  id: string
  title: string
  description: string
  subtasks: subtask[]
}