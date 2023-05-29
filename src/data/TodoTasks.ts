
import { task } from "../types/task";
import { v4 as uuidv4 } from 'uuid';

const TodoTasks: task[] = [
  {
    id: uuidv4(),
    title: "Review feedback and plan next steps",
    description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
    subtasks: [
      {
        title: "Interview 10 customers",
        isCompleted: false
      },
      {
        title: "Review common customer pain points and suggestions",
        isCompleted: false
      },
      {
        title: "Outline next steps for our roadmap",
        isCompleted: false
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Design settings and search pages",
    description: "",
    subtasks: [
      {
        title: "Settings - Account page",
        isCompleted: false
      },
      {
        title: "Settings - Billing page",
        isCompleted: false
      },
      {
        title: "Search page",
        isCompleted: false
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Research the market",
    description: "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
    subtasks: [
      {
        title: "Write up research analysis",
        isCompleted: false
      },
      {
        title: "Calculate TAM",
        isCompleted: false
      },
    ]
  },
]

export default TodoTasks