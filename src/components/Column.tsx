import { Box, Stack, Typography } from '@mui/material'
import TaskCard from './TaskCard'
import taskData  from '../data/taskData'
import { useEffect, useState } from 'react'

type Props = {
  type: 'Todo' | 'Doing' | 'Done' | string
}

const Column = (props: Props) => {
  const { type } = props
  const [badgeColor, setBadgeColor] = useState<string>('') 

  useEffect(() => {
    if (type === 'Todo') setBadgeColor('#49C4E5')
    if (type === 'Doing') setBadgeColor('#8471F2')
    if (type === 'Done') setBadgeColor('#67E2AE')
  },[type])

  return (
    <Stack width='100%' gap={2}>
      <Stack direction='row' gap={1.5}>
        <Box width={15} height={15} borderRadius='50%' bgcolor={badgeColor} />
        <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>{type} (4)</Typography>
      </Stack>
      <TaskCard data={taskData} />
      <TaskCard data={taskData} />
    </Stack>
  )
}

export default Column