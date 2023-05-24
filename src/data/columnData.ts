import { column } from "../types/column";

const columns: column[] = [
  {
    name: 'Todo',
    tasks: [
      {
        title: "Review feedback and plan next steps",
        description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
        status: "Todo",
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
      }
    ]
  },
  {
    name: 'Doing',
    tasks: [
      {
        title: "Design settings and search pages",
        description: "",
        status: "Doing",
        subtasks: [
          {
            title: "Settings - Account page",
            isCompleted: true
          },
          {
            title: "Settings - Billing page",
            isCompleted: true
          },
          {
            title: "Search page",
            isCompleted: false
          }
        ]
      },
    ]
  },
  {
    name: 'Done',
    tasks: [
      {
        title: "Research the market",
        description: "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
        status: "Done",
        subtasks: [
          {
            title: "Write up research analysis",
            isCompleted: true
          },
          {
            title: "Calculate TAM",
            isCompleted: true
          },
        ]
      },
    ]
  }
]

export default columns