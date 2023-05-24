import { subtask } from "./subtask"

export type task = {
  title: string
  description: string
  status: string
  subtasks: subtask[]
}