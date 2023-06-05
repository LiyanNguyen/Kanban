import { Modal, TextField, Typography, Stack, Button, IconButton, SxProps, Theme } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { boardStore } from '../zustand/boardStore';

type Props = {
  isEditing?: boolean
  boardName?: string
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  borderRadius: 1.5
};

const BoardModal = (props: Props) => {
  const { isEditing, boardName, openModal, setOpenModal } = props
  const [boards, setBoards, boardIndex ] = boardStore((state) => [state.boards, state.setBoards, state.boardIndex])  
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if(boardName !== undefined) setName(boardName)
  }, [boardName])

  const addNewBoard = () => {
    setBoards(boards.concat(name))
    setOpenModal(false)
    setName('')
  }

  const editBoard = () => {
    if (boardIndex !== undefined) {
      const data = [...boards];
      data[boardIndex] = name
      setBoards(data)
      setOpenModal(false)
      setName('')
    }
  }
  
  return (
    <Modal disableAutoFocus open={openModal} onClose={() => setOpenModal(false)}>
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
          onClick={isEditing ? editBoard : addNewBoard}
          variant='contained' sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none' }}
        >
          {boardName === undefined ? 'Create New Board' : 'Save Changes'}</Button>
      </Stack>
    </Modal>
  )
}

export default BoardModal