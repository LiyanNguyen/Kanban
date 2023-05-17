import React, { Dispatch, SetStateAction, useState } from 'react'
import { Stack, Box, ListItemButton, ListItemText, List, Button, Typography } from '@mui/material';
import logo from '../assets/logo-dark.svg'
import CreateNewBoardModal from './CreateNewBoardModal';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  boards: string[]
  setBoards: Dispatch<SetStateAction<string[]>>
  setSelectedBoardIndex: Dispatch<SetStateAction<number>>
  selectedBoardIndex: number
}

const Sidebar = (props: Props) => {
  const { boards, setBoards, setSelectedBoardIndex, selectedBoardIndex } = props
  const [openModal, setOpenModal] = useState<boolean>(false);

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
                <ListItemButton key={index} selected={index === selectedBoardIndex} onClick={() => setSelectedBoardIndex(index)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              )}
            </List>
          </PerfectScrollbar>
        </Stack>
      </Stack>
      <CreateNewBoardModal openModal={openModal} setOpenModal={setOpenModal} setBoards={setBoards} />
    </React.Fragment>
  )
}

export default Sidebar