import { Modal, TextField, Typography, Stack, Button, IconButton } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  boardName?: string
  selectedBoardIndex?: number
  boards: string[]
  setBoards: Dispatch<SetStateAction<string[]>>
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

const BoardModal = (props: Props) => {
  const { boardName, selectedBoardIndex, boards, setBoards, openModal, setOpenModal } = props
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if(boardName !== undefined) setName(boardName)
  }, [boardName])

  const addNewBoard = () => {
    setBoards(prev => prev.concat(name))
    setOpenModal(false)
    setName('')
  }

  const editBoard = () => {
    if (selectedBoardIndex !== undefined) {
      const data = [...boards];
      data[selectedBoardIndex] = name
      setBoards(data)
      setOpenModal(false)
      setName('')
    }
  }
  
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold'>{boardName === undefined ? 'Create New' : 'Edit'}  Board</Typography>
        <IconButton sx={{position: 'absolute', top: 16, right: 16}} onClick={() => setOpenModal(false)}>
          <CloseIcon/>
        </IconButton>
        <TextField
          fullWidth label="Name" variant="outlined" value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <Button
          disabled={name === '' || boardName === name ? true : false}
          onClick={selectedBoardIndex === undefined? addNewBoard : editBoard}
          variant='contained' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}
        >
          {boardName === undefined ? 'Create New Board' : 'Save Changes'}</Button>
      </Stack>
    </Modal>
  )
}

export default BoardModal