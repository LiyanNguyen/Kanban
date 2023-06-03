import { Modal, TextField, Typography, Stack, Button, Box, IconButton, Divider, Tooltip } from '@mui/material'
import { useState } from 'react'
import SubtaskInput from './SubtaskInput'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { subtask } from '../types/subtask'
import CloseIcon from '@mui/icons-material/Close'
import { v4 as uuidv4 } from 'uuid';
import { columnStore } from '../zustand/columnStore'
import { modalStore } from '../zustand/modalStore'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'white',
  borderRadius: 1.5
}

const CreateTaskModal = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [subtask, setSubtask] = useState<subtask[]>([])
  const [todoColumnID, columns, setColumns] =
    columnStore((state) => 
      [state.todoColumnID, state.columns, state.setColumns])
  const [openTaskModal, setOpenTaskModal] =
    modalStore((state) =>
      [state.openTaskModal, state.setOpenTaskModal])

  
  const addMoreSubtask = () => {
    setSubtask(prev =>  prev?.concat({title: '', isCompleted: false}))
  }

  const addNewTask = () => {
    const newTodoTask = {
      id: uuidv4(),
      title: title,
      description: description,
      subtasks: subtask,
    }

    setColumns({
      ...columns,
      [todoColumnID]: {
        ...columns[todoColumnID],
        tasks: [newTodoTask, ...columns[todoColumnID].tasks]
      }
    })
    
    setOpenTaskModal(false)
    setTitle('')
    setDescription('')
    setSubtask([])
  }

  const closeModal = () => {
    setOpenTaskModal(false)
  }

  return (
    <Modal open={openTaskModal} onClose={closeModal}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>Add New Task</Typography>
        <Tooltip title="Close">
          <IconButton sx={{position: 'absolute', top: 16, right: 16}} onClick={closeModal}>
            <CloseIcon/>
          </IconButton>
        </Tooltip>
        <TextField
          error={false} label='Title' fullWidth variant="outlined" value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value)
            setError(false)
          }}
          helperText={error && 'Cannot be empty'}
        />
        <TextField
          error={error} label='Description' multiline minRows={4} fullWidth variant="outlined" value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value)
            setError(false)
          }}
          helperText={error && 'Cannot be empty'}
        />
        <Box>
          {subtask.length !== 0 && <Typography mb={1} variant="subtitle2" color='#828FA3'>Subtask ({subtask.length})</Typography>}
          <PerfectScrollbar style={{maxHeight: 152, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {subtask?.map((item, index) => 
              <SubtaskInput key={index} initVal={item.title} index={index} isCompleted={item.isCompleted} subtask={subtask} setSubtask={setSubtask} />
            )}
          </PerfectScrollbar>
        </Box>
        <Button size='small' onClick={addMoreSubtask} variant='outlined' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
          Add New Subtask
        </Button>
        <Divider sx={{mt: 1}}/>
        <Stack direction='row' gap={2} justifyContent='center'>
          <Button
            disabled={title === '' ? true : false}
            onClick={addNewTask}
            variant='contained'
            sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
            Create Task
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default CreateTaskModal