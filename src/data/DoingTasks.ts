
import { task } from "../types/task";
import { v4 as uuidv4 } from 'uuid';

const DoingTasks: task[] = [
  {
    id: uuidv4(),
    "title": "Design settings and search pages",
    "description": "",
    "subtasks": [
      {
        "title": "Settings - Account page",
        "isCompleted": true
      },
      {
        "title": "Settings - Billing page",
        "isCompleted": true
      },
      {
        "title": "Search page",
        "isCompleted": false
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/36.jpg',
      name: 'Cale Hills' 
    }
  },
  {
    id: uuidv4(),
    "title": "Add account management endpoints",
    "description": "",
    "subtasks": [
      {
        "title": "Upgrade plan",
        "isCompleted": true
      },
      {
        "title": "Cancel plan",
        "isCompleted": true
      },
      {
        "title": "Update payment method",
        "isCompleted": false
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/37.jpg',
      name: 'Fredy Satterfield'
    }
  },
  {
    id: uuidv4(),
    "title": "Design onboarding flow",
    "description": "",
    "subtasks": [
      {
        "title": "Sign up page",
        "isCompleted": true
      },
      {
        "title": "Sign in page",
        "isCompleted": false
      },
      {
        "title": "Welcome page",
        "isCompleted": false
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/38.jpg',
      name: 'Trudie Dooley' 
    }
  },
  // {
  //   id: uuidv4(),
  //   "title": "Add search enpoints",
  //   "description": "",
  //   "subtasks": [
  //     {
  //       "title": "Add search endpoint",
  //       "isCompleted": true
  //     },
  //     {
  //       "title": "Define search filters",
  //       "isCompleted": false
  //     }
  //   ],
  //   assignee: {
  //     picture: 'https://randomuser.me/api/portraits/men/39.jpg',
  //     name: 'Delta Bradtke'
  //   }
  // },
  // {
  //   id: uuidv4(),
  //   "title": "Add authentication endpoints",
  //   "description": "",
  //   "subtasks": [
  //     {
  //       "title": "Define user model",
  //       "isCompleted": true
  //     },
  //     {
  //       "title": "Add auth endpoints",
  //       "isCompleted": false
  //     }
  //   ],
  //   assignee: {
  //     picture: 'https://randomuser.me/api/portraits/women/40.jpg',
  //     name: 'Marisa Block'
  //   }
  // },
  // {
  //   id: uuidv4(),
  //   "title": "Research pricing points of various competitors and trial different business models",
  //   "description": "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
  //   "subtasks": [
  //     {
  //       "title": "Research competitor pricing and business models",
  //       "isCompleted": true
  //     },
  //     {
  //       "title": "Outline a business model that works for our solution",
  //       "isCompleted": false
  //     },
  //     {
  //       "title": "Talk to potential customers about our proposed solution and ask for fair price expectancy",
  //       "isCompleted": false
  //     }
  //   ],
  //   assignee: {
  //     picture: 'https://randomuser.me/api/portraits/men/41.jpg',
  //     name: 'Skye Rath'
  //   }
  // }
]

export default DoingTasks