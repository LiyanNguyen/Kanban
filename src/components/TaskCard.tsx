import { Stack, Typography } from '@mui/material'
import TaskModal from './TaskModal'
import React, { useState } from 'react'
import { task } from '../types/task'

type Props = {
  isDragging?: boolean
  data: task
}

const TaskCard = (props: Props) => {
  const { isDragging, data } = props
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <React.Fragment>
      <Stack
        onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)}
        onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer', opacity: isDragging? 0.8 : 1 }}
        px={2} py={3} bgcolor='white' borderRadius={1} mb={2}
        boxShadow={'0px 4px 6px rgba(54, 78, 126, 0.101545)'}
      >
        <Typography color={isHovered? '#635FC7' : '#000112' }fontSize={15} fontWeight='bold'>{data.title}</Typography>
        <Typography color='#828FA3' fontSize={12} fontWeight='bold'>
          {data?.subtasks?.filter(item => item.isCompleted).length} of {data?.subtasks?.length} subtasks
        </Typography>
      </Stack>
      <TaskModal openModal={openModal} setOpenModal={setOpenModal} data={data}/>
    </React.Fragment>
  )
}

export default TaskCard