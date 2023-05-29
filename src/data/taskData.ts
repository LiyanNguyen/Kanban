import { task } from "../types/task";
import { v4 as uuidv4 } from 'uuid';

const taskData: task = {
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
}

export default taskData