import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Dispatch, SetStateAction, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskModal from '../components/TaskModal';
import React from 'react';
import BoardModal from '../components/BoardModal';

interface Props {
  boards: string[]
  setBoards: Dispatch<SetStateAction<string[]>>
  selectedBoardIndex: number
}

const Topbar = (props: Props) => {
  const { boards, setBoards, selectedBoardIndex } = props
  const [openTaskModal, setOpenTaskModal] = useState<boolean>(false);
  const [openBoardModal, setOpenBoardModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const openEditModal = () => {
    setAnchorEl(null)
    setOpenBoardModal(true)
  }

  const deleteBoard = () => {
    console.log('delete')
  }

  return (
    <React.Fragment>
      <Stack direction='row' alignItems='center' px={4} height={97} bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
        <Typography variant='h6' fontWeight='bold'>{boards[selectedBoardIndex]}</Typography>
        <Box>
          <Button onClick={() => setOpenTaskModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddTaskIcon fontSize='small'/> Add New Task</Button>
          <IconButton onClick={handleClick}>
            <MoreVertIcon sx={{ cursor: 'pointer', fontSize: 20, color: 'gray' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={openMenu} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={openEditModal} sx={{ display: 'flex', alignItems:'center', gap : 1}}>
              <EditIcon sx={{color:'gray', fontSize: 18}} />
              <Typography variant='body1' color='gray'>Edit</Typography>
            </MenuItem>
            <MenuItem onClick={deleteBoard} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DeleteOutlineIcon sx={{ color: 'red', fontSize: 18 }} />
              <Typography variant='body1' color='red'>Delete</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
      <TaskModal openModal={openTaskModal} setOpenModal={setOpenTaskModal} />
      <BoardModal
        boardName={boards[selectedBoardIndex]}
        selectedBoardIndex={selectedBoardIndex}
        boards={boards}
        setBoards={setBoards}
        openModal={openBoardModal}
        setOpenModal={setOpenBoardModal}
      />
    </React.Fragment>
  )
}

export default Topbar