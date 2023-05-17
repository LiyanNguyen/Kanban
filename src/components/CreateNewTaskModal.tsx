import { Modal, TextField, Typography, Stack, Button, Box, IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import NewSubtaskInput from './NewSubtaskInput';

type Props = {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  borderRadius: 1.5
};

const CreateNewTaskModal = (props: Props) => {
  const { openModal, setOpenModal } = props
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  const [status, setStatus] = useState('Todo');
  const [subtask, setSubtask] = useState<string[]>([''])
  
  const addMoresubtask = () => {
    setSubtask([...subtask, ''])
  }

  const addTask = () => {
    subtask.map(item => console.log(item))
  }

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>Add New Task</Typography>
        <TextField
          error={error} label='Title' fullWidth variant="outlined" value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
            setError(false)
          }}
          helperText={error && 'Cannot be empty'}
        />
        <TextField
          error={error} label='Description' multiline minRows={4} fullWidth variant="outlined" value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
            setError(false)
          }}
          helperText={error && 'Cannot be empty'}
        />
        <Box>
          <Typography variant="subtitle2" color='gray'>subtask</Typography>
          <Stack gap={2}>
            {subtask.map((item, index) => 
              <NewSubtaskInput key={index} index={index} subtask={subtask} setSubtask={setSubtask} />
            )}
          </Stack>
        </Box>
        <Button size='small' onClick={addMoresubtask} variant='outlined' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
          Add New Subtask
        </Button>
        <Box>
          <Typography variant="subtitle2" color='gray'>Status</Typography>
          <Select value={status} onChange={(event) => setStatus(event.target.value)} fullWidth size='small'>
            <MenuItem value='Todo'>Todo</MenuItem>
            <MenuItem value='Doing'>Doing</MenuItem>
            <MenuItem value='Done'>Done</MenuItem>
          </Select>
        </Box>
        <Button onClick={addTask} variant='contained' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
          Create Task
        </Button>
      </Stack>
    </Modal>
  )
}

export default CreateNewTaskModal