import React, { useState } from 'react'
import { Stack, Box, ListItemButton, ListItemText, List, Button, Typography } from '@mui/material';
import logo from '../assets/logo-dark.svg'
import BoardModal from '../components/BoardModal';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import AddIcon from '@mui/icons-material/Add';
import { boardStore } from '../zustand/boardStore';

const Sidebar = () => {
  const [boards, boardIndex, setBoardIndex] = boardStore((state) => [state.boards, state.boardIndex, state.setBoardIndex])
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <React.Fragment>
      <Stack width={300} display={['none','flex','flex']} bgcolor='white' height='100%' borderRight={'1px solid #E4EBFA'}>
        <Box p={4}>
          <img src={logo} alt="logo" width={152} height={25} />
        </Box>
        <Stack px={4}>
          <Button onClick={() => setOpenModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddIcon fontSize='small'/>Add New Board</Button>
          <Typography color='gray' variant='subtitle2' textTransform='uppercase' mt={2}>
           All Boards ({boards.length})
          </Typography>
          <PerfectScrollbar style={{ maxHeight: 550 }}>
            <List>
              {boards.map((item, index) =>
                <ListItemButton key={index} selected={index === boardIndex} onClick={() => setBoardIndex(index)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              )}
            </List>
          </PerfectScrollbar>
        </Stack>
      </Stack>
      <BoardModal openModal={openModal} setOpenModal={setOpenModal}/>
    </React.Fragment>
  )
}

export default Sidebar