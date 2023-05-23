import { column } from "../types/column";

const columns: column[] = [
	{
		name: 'Todo',
		tasks: [
			{
				title: '',
				description: '',
				status: '',
				subtasks: [
					{ title: '', isCompleted: false }
				]
			}
		]
	},
	{
		name: 'Doing',
		tasks: []
	},
	{
		name: 'Done',
		tasks: []
	}
]

export default columns