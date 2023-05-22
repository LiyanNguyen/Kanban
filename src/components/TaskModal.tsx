import { Modal, TextField, Typography, Stack, Button, Box, MenuItem, Select, IconButton } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Subtask from './Subtask';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { subtask } from '../types/subtask';
import { task } from '../types/task';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  data?: task
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'white',
  borderRadius: 1.5
};

const TaskModal = (props: Props) => {
  const { data, openModal, setOpenModal } = props
  const [title, setTitle] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [error, setError] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('Todo');
  const [subtask, setSubtask] = useState<subtask[]>([])

  useEffect(() => {
    if (data !== undefined) {
      setTitle(data.title)
      setDescription(data.description)
      setStatus(data.status)
      setSubtask(data.subtasks)
    }
  },[data])
  
  const addMoresubtask = () => {
    setSubtask(prev =>  prev?.concat({title: '', isCompleted: false}))
  }

  const addOrUdpateTask = () => {
    console.log({
      title: title,
      description: description,
      subtasks: subtask,
      status: status
    })
  }

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>{data === undefined ? 'Add New' : 'Edit'} Task</Typography>
        <IconButton sx={{position: 'absolute', top: 16, right: 16}} onClick={() => setOpenModal(false)}>
          <CloseIcon/>
        </IconButton>
        <TextField
          error={false} label='Title' fullWidth variant="outlined" value={title}
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
          {subtask.length !== 0 && <Typography variant="subtitle2" color='gray'>Subtask</Typography>}
          <PerfectScrollbar style={{maxHeight: 152, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {subtask?.map((item, index) => 
              <Subtask key={index} initVal={item.title} index={index} isCompleted={item.isCompleted} subtask={subtask} setSubtask={setSubtask} />
            )}
          </PerfectScrollbar>
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
        <Stack direction='row' gap={2} justifyContent='center'>
          <Button
            disabled={title === '' ? true : false}
            onClick={addOrUdpateTask}
            variant='contained'
            sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
            {data === undefined ? 'Create' : 'Update'} Task
          </Button>
          {data !== undefined &&
            <Button
              variant='contained'
              color='error'
              sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}
            >
              Delete Task
            </Button>
          }
        </Stack>
      </Stack>
    </Modal>
  )
}

export default TaskModal