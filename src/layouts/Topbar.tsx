import { Box, Button, Stack } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { modalStore } from '../zustand/modalStore';
import logo from '../assets/logo-dark.svg'

const Topbar = () => {
  const [setOpenTaskModal] = modalStore((state) => [state.setOpenTaskModal])

  return (
    <Stack direction='row' alignItems='center' p={3}  bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
      <img src={logo} alt="logo" width={152} height={25} />
      <Box>
        <Button size='small' onClick={() => setOpenTaskModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddTaskIcon fontSize='small'/> Add New Task</Button>
      </Box>
    </Stack>
  )
}

export default Topbar