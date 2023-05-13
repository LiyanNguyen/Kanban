import { Modal, TextField, Typography, Stack, Button } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'

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

const CreateNewBoardModal = (props: Props) => {
  const { openModal, setOpenModal } = props
  const [name, setName] = useState<string>('');

  const addNewBoard = () => {
    alert(name)
  }
  
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>Add New Board</Typography>
        <TextField
          fullWidth label="Name" variant="outlined" value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <Button
          onClick={addNewBoard}
          variant='contained' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}
        >
          Create Board</Button>
      </Stack>
    </Modal>
  )
}

export default CreateNewBoardModal