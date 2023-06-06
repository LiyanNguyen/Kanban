import { task } from "../types/task";
import { v4 as uuidv4 } from 'uuid';

const DoneTasks: task[] = [
  {
    id: uuidv4(),
    "title": "Conduct 5 wireframe tests",
    "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
    "subtasks": [
      {
        "title": "Complete 5 wireframe prototype tests",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Henriette Balistreri' 
    }
  },
  {
    id: uuidv4(),
    "title": "Create wireframe prototype",
    "description": "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
    "subtasks": [
      {
        "title": "Create clickable wireframe prototype in Balsamiq",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/33.jpg',
      name: 'Jaren Parisian'
    }
  },
  {
    id: uuidv4(),
    "title": "Review results of usability tests and iterate",
    "description": "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
    "subtasks": [
      {
        "title": "Meet to review notes from previous tests and plan changes",
        "isCompleted": true
      },
      {
        "title": "Make changes to paper prototypes",
        "isCompleted": true
      },
      {
        "title": "Conduct 5 usability tests",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/women/34.jpg',
      name: 'Jazmin Aufderhar'
    }
  },
  {
    id: uuidv4(),
    "title": "Create paper prototypes and conduct 10 usability tests with potential customers",
    "description": "",
    "subtasks": [
      {
        "title": "Create paper prototypes for version one",
        "isCompleted": true
      },
      {
        "title": "Complete 10 usability tests",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/women/35.jpg',
      name: 'Jewel Altenwerth'
    }
  },
  {
    id: uuidv4(),
    "title": "Market discovery",
    "description": "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
    "subtasks": [
      {
        "title": "Interview 10 prospective customers",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/36.jpg',
      name: 'Cale Hills'
    }
  },
  {
    id: uuidv4(),
    "title": "Competitor analysis",
    "description": "",
    "subtasks": [
      {
        "title": "Find direct and indirect competitors",
        "isCompleted": true
      },
      {
        "title": "SWOT analysis for each competitor",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/37.jpg',
      name: 'Fredy Satterfield'
    }
  },
  {
    id: uuidv4(),
    "title": "Research the market",
    "description": "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
    "subtasks": [
      {
        "title": "Write up research analysis",
        "isCompleted": true
      },
      {
        "title": "Calculate TAM",
        "isCompleted": true
      }
    ],
    assignee: {
      picture: 'https://randomuser.me/api/portraits/men/38.jpg',
      name: 'Trudie Dooley'
    }
  }
]

export default DoneTasks