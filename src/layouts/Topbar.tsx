import { Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { modalStore } from '../zustand/modalStore';
import MenuOpenIcon from '@mui/icons-material/MenuOpenRounded';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Topbar = (props: Props) => {
  const { setOpen } = props
  const [setOpenTaskModal] = modalStore((state) => [state.setOpenTaskModal])

  return (
    <Stack direction='row' alignItems='center' p={3} bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
      <Stack direction='row' alignItems='center'>
        <Tooltip title="Open Boards">
          <IconButton size='small' onClick={() => setOpen(true)}>
            <MenuOpenIcon htmlColor='#635FC7' fontSize='large' sx={{rotate: '180deg'}}/>
          </IconButton>
        </Tooltip>
      </Stack>
      <Typography variant='h5' fontWeight='bold'>Platform Launch</Typography>
      <Box>
        <IconButton sx={{display:['block','none']}} size='small' onClick={() => setOpenTaskModal(true)}>
          <AddTaskIcon htmlColor='#635FC7' fontSize='medium' />
        </IconButton>
        <Button size='small' onClick={() => setOpenTaskModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1, display: ['none', 'flex'], color: '#635FC7', borderColor: '#635FC7' }}><AddTaskIcon fontSize='small'/> Add New Task</Button>
      </Box>
    </Stack>
  )
}

export default Topbar