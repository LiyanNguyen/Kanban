import { Stack, Typography } from '@mui/material'
import CreateNewTaskModal from './CreateNewTaskModal'
import React, { useState } from 'react'

type Props = {
	title?: string
	description?: string
	subtasks?: []
}

const TaskCard = (props: Props) => {
	const { title, description, subtasks } = props
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<React.Fragment>
			<Stack
				onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer' }}
				px={2} py={3} bgcolor='white' borderRadius={1}
				boxShadow={'0px 4px 6px rgba(54, 78, 126, 0.101545)'}
			>
				<Typography color='#000112' fontSize={15} fontWeight='bold'>{title}Build UI for onboarding flow</Typography>
				<Typography color='#828FA3' fontSize={12} fontWeight='bold'>{subtasks?.length}0 of 3 substasks</Typography>
			</Stack>
			<CreateNewTaskModal openModal={openModal} setOpenModal={setOpenModal} />
		</React.Fragment>
	)
}

export default TaskCard