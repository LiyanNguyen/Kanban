import { Box, Stack, Typography } from '@mui/material'
import TaskCard from './TaskCard'
import { useEffect, useState } from 'react'
import { task } from '../types/task'

type Props = {
  type: 'Todo' | 'Doing' | 'Done' | string
  tasks: task[]
}

const Column = (props: Props) => {
  const { type, tasks } = props
  const [badgeColor, setBadgeColor] = useState<string>('') 

  useEffect(() => {
    if (type === 'Todo') setBadgeColor('#49C4E5')
    if (type === 'Doing') setBadgeColor('#8471F2')
    if (type === 'Done') setBadgeColor('#67E2AE')
  }, [type])
  
  return (
    <Stack width='100%' gap={2}>
      <Stack direction='row' gap={1.5}>
        <Box width={15} height={15} borderRadius='50%' bgcolor={badgeColor} />
        <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>{type} ({tasks.length})</Typography>
      </Stack>
      {tasks.map((item, index) => <TaskCard key={index} data={item} />)}
    </Stack>
  )
}

export default Column