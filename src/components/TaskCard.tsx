import { Avatar, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { task } from '../types/task'
import ViewTaskModal from './ViewTaskModal'

type Props = {
  columnName: string
  columnID: string
  id: string
  isDragging?: boolean
  data: task
}

const TaskCard = (props: Props) => {
  const { columnName, columnID, id, isDragging, data } = props
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Stack
        onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)}
        onClick={() => setOpen(true)}
        sx={{ cursor: 'grab', opacity: isDragging? 0.75 : 1 }}
        px={2} py={3} bgcolor='white' borderRadius={1} mb={2}
        boxShadow={'0px 4px 6px rgba(54, 78, 126, 0.101545)'}
        gap={0.5}
      >
        <Typography
          sx={{ wordWrap: 'break-word', cursor: 'pointer' }}
          color={isHovered ? '#635FC7' : '#000112'}
          fontWeight='bold'>{data.title}</Typography>
        <Typography color='#828FA3' variant='subtitle2' fontWeight='bold'>
          Subtask: {data?.subtasks?.filter(item => item.isCompleted).length} / {data?.subtasks?.length}
        </Typography>
        <Stack direction='row' gap={1} alignItems='center'>
          <Avatar src={data.assignee.picture} alt={data.assignee.name} sx={{ width: 28, height: 28 }} />
          <Typography color='#828FA3' variant='subtitle2'>{data.assignee.name}</Typography>
        </Stack>
      </Stack>
      <ViewTaskModal columnName={columnName} columnID={columnID} id={id} data={data} open={open} setOpen={setOpen} />
    </>
  )
}

export default TaskCard