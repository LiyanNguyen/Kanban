
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
        title: "Review common customer pain points",
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
  {
    id: uuidv4(),
    title: "Plan Product Hunt launch",
    description: "",
    subtasks: [
      {
        title: "Find hunter",
        isCompleted: false
      },
      {
        title: "Gather assets",
        isCompleted: false
      },
      {
        title: "Draft product page",
        isCompleted: false
      },
      {
        title: "Notify customers",
        isCompleted: false
      },
      {
        title: "Notify network",
        isCompleted: false
      },
      {
        title: "Launch!",
        isCompleted: false
      }
    ]
  },
  {
    id: uuidv4(),
    "title": "Build UI for search",
    "description": "",
    "subtasks": [
      {
        "title": "Search page",
        "isCompleted": false
      }
    ]
  },
  {
    id: uuidv4(),
    "title": "Build settings UI",
    "description": "",
    "subtasks": [
      {
        "title": "Account page",
        "isCompleted": false
      },
      {
        "title": "Billing page",
        "isCompleted": false
      }
    ]
  },
]

export default TodoTasks