import { Box, Stack, Typography } from '@mui/material';
import EmptyBoard from '../components/EmptyBoard';
import React from 'react';
import TaskCard from '../components/TaskCard';

interface Props {
  columns?: []
}

const Board = (props: Props) => {
  const { columns } = props

  return (
    <Stack direction='row' bgcolor='#F4F7FD' width='100%' height='100%' justifyContent={columns === undefined ? 'center' : 'space-between'} p={3} gap={3}>
      {columns === undefined ? <EmptyBoard /> :
        <React.Fragment>
          <Stack width='100%' gap={2}>
            <Stack direction='row' gap={1.5}>
              <Box width={15} height={15} borderRadius='50%' bgcolor='#49C4E5' />
              <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>Todo (4)</Typography>
            </Stack>
            <TaskCard/>
            <TaskCard/>
          </Stack>
          <Stack width='100%' gap={2}>
            <Stack direction='row' gap={1.5}>
              <Box width={15} height={15} borderRadius='50%' bgcolor='#8471F2' />
              <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>Doing (6)</Typography>
            </Stack>
            <TaskCard />
            <TaskCard />
          </Stack>
          <Stack width='100%' gap={2}>
            <Stack direction='row' gap={1.5}>
              <Box width={15} height={15} borderRadius='50%' bgcolor='#67E2AE' />
              <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>Done (7)</Typography>
            </Stack>
            <TaskCard />
            <TaskCard />
          </Stack>
        </React.Fragment>
      }
    </Stack>
  )
}

export default Board