import { Modal, Typography, Stack, IconButton, Button } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  type: 'Board' | 'Task'
  itemName: string
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

const DeleteModal = (props: Props) => {
  const { type, itemName, openModal, setOpenModal } = props


  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={style} p={4} gap={2}>
        <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={() => setOpenModal(false)}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" fontWeight='bold' color='error'>Delete This {type}?</Typography>
        { type === 'Board' && 
          <Typography color='gray'>Are you sure you want to delete the "{itemName}" board? This action will remove all columns and tasks and cannot be reversed.</Typography>
        }
        <Stack direction='row' gap={2}>
          <Button variant='contained' color='error' fullWidth>Delete</Button>
          <Button variant='contained' color='inherit' fullWidth>Cancel</Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeleteModal