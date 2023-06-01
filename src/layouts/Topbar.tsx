import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Dispatch, SetStateAction, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskModal from '../components/TaskModal';
import React from 'react';
import BoardModal from '../components/BoardModal';
import DeleteModal from '../components/DeleteModal';
import { boardStore } from '../zustand/boardStore';
import { column } from '../types/column';

type Props = {
  columns: column
  setColumns: Dispatch<SetStateAction<column>>
}

const Topbar = (props: Props) => {
  const {columns, setColumns} = props
  const [boards, boardIndex] = boardStore((state) => [state.boards, state.boardIndex]);
  const [openTaskModal, setOpenTaskModal] = useState<boolean>(false);
  const [openBoardModal, setOpenBoardModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const showEditModal = () => {
    setAnchorEl(null)
    setOpenBoardModal(true)
  }

  const showDeleteModal = () => {
    setAnchorEl(null)
    setOpenDeleteModal(true)
  }

  return (
    <React.Fragment>
      <Stack direction='row' alignItems='center' px={4} height={97} bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
        <Typography variant='h6' fontWeight='bold'>{boards[boardIndex]}</Typography>
        <Box>
          <Button onClick={() => setOpenTaskModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddTaskIcon fontSize='small'/> Add New Task</Button>
          <IconButton onClick={handleClick}>
            <MoreVertIcon sx={{ cursor: 'pointer', fontSize: 20, color: 'gray' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={openMenu} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={showEditModal} sx={{ display: 'flex', alignItems:'center', gap : 1}}>
              <EditIcon sx={{color:'gray', fontSize: 18}} />
              <Typography variant='body1' color='gray'>Edit</Typography>
            </MenuItem>
            <MenuItem onClick={showDeleteModal} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DeleteOutlineIcon sx={{ color: 'red', fontSize: 18 }} />
              <Typography variant='body1' color='red'>Delete</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
      <TaskModal openModal={openTaskModal} setOpenModal={setOpenTaskModal} columns={columns} setColumns={setColumns} />
      <BoardModal isEditing boardName={boards[boardIndex]} openModal={openBoardModal} setOpenModal={setOpenBoardModal} />
      <DeleteModal type='Board' itemName={boards[boardIndex]} openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} />
    </React.Fragment>
  )
}

export default Topbar