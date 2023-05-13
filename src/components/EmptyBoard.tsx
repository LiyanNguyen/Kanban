import { Button, Stack, Typography } from '@mui/material';

const EmptyBoard = () => {
  return (
    <Stack justifyContent='center' alignItems='center' height='100%' gap={2}>
      <Typography>This board is empty. Create a new task to get started.</Typography>
      <Button variant='outlined' sx={{textTransform: 'none'}}>+ Add New Task</Button>
    </Stack>
  )
}

export default EmptyBoard