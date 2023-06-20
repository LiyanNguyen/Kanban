import { useState, MouseEvent } from 'react'
import { Stack, Box, ListItemButton, ListItemText, List, Button, Typography, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import logo from '../assets/logo-dark.svg'
import BoardModal from '../components/BoardModal';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { boardStore } from '../zustand/boardStore';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteBoardModal from '../components/DeleteBoardModal';

const Sidebar = () => {
  const [boards, boardIndex, setBoardIndex] = boardStore((state) => [state.boards, state.boardIndex, state.setBoardIndex])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  return (
    <>
      <Stack width={300} bgcolor='white' height='100%' borderRight={'1px solid #E4EBFA'}>
        <Box px={4} pt={4} pb={3}>
          <img src={logo} alt="logo" width={152} height={25} />
        </Box>
        <Stack pl={4}>
          <Button onClick={() => setOpenModal(true)} variant='outlined' size='small' sx={{ textTransform: 'none', color: '#635FC7', borderColor: '#635FC7', mr: 4 }}>
            <LibraryAddOutlinedIcon fontSize="small" /> Create New Board
          </Button>
          <Typography color='#828FA3'   fontSize='medium' mt={2}>
           My Boards ({boards.length})
          </Typography>
          <PerfectScrollbar style={{ maxHeight: 500 }}>
            <List sx={{mr:1}}>
              {boards.map((item, index) =>
                <Stack direction='row' alignItems='center' key={index}>
                  <ListItemButton sx={{borderRadius: 1.5}} key={index} selected={index === boardIndex} onClick={() => setBoardIndex(index)}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                  <IconButton sx={{width: 36, height:36}} onClick={handleClick}>
                    <MoreVertOutlinedIcon  htmlColor='#828FA3' sx={{fontSize: 18}} />
                  </IconButton>
                </Stack>
              )}
              <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => { setOpenEditModal(true); setAnchorEl(null) }} sx={{ color: '#828FA3' }}>Edit</MenuItem>
                <MenuItem onClick={() => { setOpenDeleteModal(true); setAnchorEl(null) }} sx={{ color: '#828FA3' }}>Delete</MenuItem>
              </Menu>
            </List>
          </PerfectScrollbar>
        </Stack>
      </Stack>
      <BoardModal openModal={openModal} setOpenModal={setOpenModal} />
      <BoardModal isEditing boardName='Platform Launch' openModal={openEditModal} setOpenModal={setOpenEditModal} />
      <DeleteBoardModal itemName='Platform Launch' openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} />
    </>
  )
}

export default Sidebar