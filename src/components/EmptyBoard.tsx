import { Button, Stack, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { modalStore } from '../zustand/modalStore';

const EmptyBoard = () => {
  const [setOpenTaskModal] = modalStore((state) => [state.setOpenTaskModal])
  
  return (
    <Stack justifyContent='center' alignItems='center' height='100%' gap={2} maxWidth={[250, 500, 500]}>
      <Typography textAlign='center'>This board is empty. Create a new task to get started.</Typography>
      <Button onClick={() => setOpenTaskModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddTaskIcon fontSize='small'/>Add New Task</Button>
    </Stack>
  )
}

export default EmptyBoard