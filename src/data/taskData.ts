import { task } from "../types/task";

const taskData: task = {
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

export default taskData