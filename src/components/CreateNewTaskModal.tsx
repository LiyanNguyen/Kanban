import { Modal, TextField, Typography, Stack, Button, Box, IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

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

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    alert(age)
  };


  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>Add New Task</Typography>
        <Box>
          <Typography variant="subtitle2" color='gray'>Title</Typography>
          <TextField
            error={error} fullWidth variant="outlined" value={title}
            placeholder='e.g. Take coffee break' 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
              setError(false)
            }}
            helperText={error && 'Cannot be empty'}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" color='gray'>Description</Typography>
          <TextField
            error={error} multiline minRows={4} fullWidth variant="outlined" value={description}
            placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
              setError(false)
            }}
            helperText={error && 'Cannot be empty'}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" color='gray'>Subtasks</Typography>
          <Stack direction='row' gap={1}>
            <TextField
              error={error} fullWidth variant="outlined" value={title} size='small'
              placeholder='e.g. Take coffee break'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value);
                setError(false)
              }}
              helperText={error && 'Cannot be empty'}
            />
            <IconButton>
              <CloseIcon fontSize='small'/>
            </IconButton>
          </Stack>
        </Box>
        <Button size='small' onClick={() => alert(title)} variant='outlined' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
          Add New Subtask
        </Button>
        <Box>
          <Typography variant="subtitle2" color='gray'>Status</Typography>
          <Select value={age} onChange={handleChange} fullWidth size='small'>
            <MenuItem value='Todo'>Todo</MenuItem>
            <MenuItem value='Doing'>Doing</MenuItem>
            <MenuItem value='Done'>Done</MenuItem>
          </Select>

        </Box>
        <Button onClick={() => alert(title)} variant='contained' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}>
          Create Board
        </Button>
      </Stack>
    </Modal>
  )
}

export default CreateNewTaskModal