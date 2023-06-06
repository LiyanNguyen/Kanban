import { subtask } from "./subtask"
import { user } from "./user"

export type task = {
  id: string
  title: string
  description: string
  subtasks: subtask[]
  assignee: user
}