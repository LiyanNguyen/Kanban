import { useState } from 'react'
import { Stack, Box, ListItemButton, ListItemText, List, Button, Typography } from '@mui/material';
import logo from '../assets/logo-dark.svg'
import BoardModal from '../components/BoardModal';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { boardStore } from '../zustand/boardStore';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';

const Sidebar = () => {
  const [boards, boardIndex, setBoardIndex] = boardStore((state) => [state.boards, state.boardIndex, state.setBoardIndex])
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <Stack width={300} bgcolor='white' height='100%' borderRight={'1px solid #E4EBFA'}>
        <Box px={4} pt={4} pb={3}>
          <img src={logo} alt="logo" width={152} height={25} />
        </Box>
        <Stack px={4}>
          <Button onClick={() => setOpenModal(true)} variant='outlined' size='small' sx={{ textTransform: 'none', color: '#635FC7', borderColor: '#635FC7' }}>
            <LibraryAddOutlinedIcon fontSize="small" /> Create New Board
          </Button>
          <Typography color='#828FA3'   fontSize='medium' mt={2}>
           My Boards ({boards.length})
          </Typography>
          <PerfectScrollbar style={{ maxHeight: 500 }}>
            <List>
              {boards.map((item, index) =>
                <ListItemButton sx={{borderRadius: 1.5}} key={index} selected={index === boardIndex} onClick={() => setBoardIndex(index)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              )}
            </List>
          </PerfectScrollbar>
        </Stack>
      </Stack>
      <BoardModal openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  )
}

export default Sidebar