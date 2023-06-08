
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
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Henriette Balistreri' 
    }
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
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/33.jpg',
      name: 'Jaren Parisian' 
    }
  },
  // {
  //   id: uuidv4(),
  //   "title": "Build UI for search",
  //   "description": "",
  //   "subtasks": [
  //     {
  //       "title": "Search page",
  //       "isCompleted": false
  //     }
  //   ],
  //   assignee: {
  //     picture: 'https://randomuser.me/api/portraits/women/34.jpg',
  //     name: 'Jazmin Aufderhar' 
  //   }
  // },
  // {
  //   id: uuidv4(),
  //   "title": "Build settings UI",
  //   "description": "",
  //   "subtasks": [
  //     {
  //       "title": "Account page",
  //       "isCompleted": false
  //     },
  //     {
  //       "title": "Billing page",
  //       "isCompleted": false
  //     }
  //   ],
  //   assignee: {
  //     picture: 'https://randomuser.me/api/portraits/women/35.jpg',
  //     name: 'Jewel Altenwerth' 
  //   }
  // },
]

export default TodoTasks