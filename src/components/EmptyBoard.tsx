import { Button, Stack, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskModal from './TaskModal';
import React, { useState } from 'react';

const EmptyBoard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  
  return (
    <React.Fragment>
      <Stack justifyContent='center' alignItems='center' height='100%' gap={2} maxWidth={[250, 500, 500]}>
        <Typography textAlign='center'>This board is empty. Create a new task to get started.</Typography>
        <Button onClick={() => setOpenModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddTaskIcon fontSize='small'/>Add New Task</Button>
      </Stack>
      <TaskModal openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export default EmptyBoard