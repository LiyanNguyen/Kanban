import { Modal, TextField, Typography, Stack, Button, Box, IconButton, Divider, Tooltip, Autocomplete } from '@mui/material'
import { useState } from 'react'
import SubtaskInput from './SubtaskInput'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { subtask } from '../types/subtask'
import CloseIcon from '@mui/icons-material/Close'
import { v4 as uuidv4 } from 'uuid';
import { columnStore } from '../zustand/columnStore'
import { modalStore } from '../zustand/modalStore'
import { task } from '../types/task'
import { UserList } from '../data/UserList'
import { user } from '../types/user'
import { modalStyle } from '../styles/modalStyle'

const CreateTaskModal = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [subtask, setSubtask] = useState<subtask[]>([])
  const [selectedUser, setSelectedUser] = useState<user | null>(null)
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
    if (selectedUser !== null) {
      const newTodoTask: task = {
        id: uuidv4(),
        title: title,
        description: description,
        subtasks: subtask.filter(item => item.title !== ''),
        assignee: selectedUser
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
      setSelectedUser(null)
    }
  }

  const closeModal = () => {
    setOpenTaskModal(false)
  }

  return (
    <Modal disableAutoFocus open={openTaskModal} onClose={closeModal}>
      <Stack sx={modalStyle} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>Add New Task</Typography>
        <Tooltip title="Close">
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={closeModal}>
            <CloseIcon fontSize='small' />
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
          error={error} label='Description' multiline minRows={3} maxRows={3} fullWidth variant="outlined" value={description}
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
        <Autocomplete
          size='small'
          fullWidth
          options={UserList}
          value={selectedUser}
          getOptionLabel={(option: user) => option.name}
          onChange={(_event, newValue: user | null) => {
            setSelectedUser(newValue)
          }}
          renderInput={(params) => (
            <TextField {...params} label='Assignee'/>
          )}
        />
        <Divider sx={{ mt: 1 }} />
        <Typography variant='subtitle2' color='#828FA3'>Status:&nbsp;
          <span style={{ color: '#49C4E5', fontWeight: 'bold' }}>
            Todo
          </span>
        </Typography>
        <Stack direction='row' gap={2} justifyContent='center'>
          <Button
            disabled={title === '' || selectedUser === null ? true : false}
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