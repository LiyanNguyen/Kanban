import { Avatar, Stack, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { task } from '../types/task'
import ViewTaskModal from './ViewTaskModal'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

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
        boxShadow={'0px 4px 6px 2px rgba(54, 78, 126, 0.151545)'}
        gap={0.5}
      >
        <Typography
          sx={{ wordWrap: 'break-word', cursor: 'pointer' }}
          color={isHovered ? '#635FC7' : '#000112'}
          fontWeight='bold'>{data.title}</Typography>
        {data.subtasks.length > 0 && 
          <Typography color='#828FA3' variant='subtitle2' fontWeight='bold'>
            Subtask: {data.subtasks.filter(item => item.isCompleted).length} / {data.subtasks.length}
          </Typography>
        }
        <Stack direction='row' gap={1} alignItems='center'>
          <Avatar src={data.assignee.picture} alt={data.assignee.name} sx={{ width: 28, height: 28 }} />
          <Typography color='#828FA3' variant='subtitle2'>{data.assignee.name}</Typography>
          {isHovered &&
            <Stack direction='row' alignItems='center' gap={0.5} marginLeft='auto'>
              <Tooltip title="Click to View">
                <VisibilityIcon fontSize='small' sx={{ color: '#828FA3' }} />
              </Tooltip>
              <Tooltip title="Hold to Drag">
                <DragIndicatorIcon fontSize='small' sx={{ color: '#828FA3'}}/>
              </Tooltip>
            </Stack>
          }
        </Stack>
      </Stack>
      <ViewTaskModal columnName={columnName} columnID={columnID} id={id} data={data} open={open} setOpen={setOpen} />
    </>
  )
}

export default TaskCard