import { Modal, Typography, Stack, IconButton, Button } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import { modalStyle } from '../styles/modalStyle';

type Props = {
  itemName: string
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const DeleteBoardModal = (props: Props) => {
  const { itemName, openModal, setOpenModal } = props

  return (
    <Modal disableAutoFocus open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={modalStyle} p={4} gap={2}>
        <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => setOpenModal(false)}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" fontWeight='bold' color='error'>Delete This Board?</Typography>
        <Typography color='gray'>Are you sure you want to delete the "{itemName}" board? This action will remove all columns and tasks and cannot be reversed.</Typography>
        <Stack direction='row' gap={2}>
          <Button variant='contained' color='error' fullWidth>Delete</Button>
          <Button variant='contained' color='inherit' fullWidth onClick={() => setOpenModal(false)}>Cancel</Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeleteBoardModal