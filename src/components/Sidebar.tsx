import React, { Dispatch, SetStateAction, useState } from 'react'
import { Stack, Box, ListItemButton, ListItemText, List, Button, Collapse } from '@mui/material';
import logo from '../assets/logo-dark.svg'
import CreateNewBoardModal from './CreateNewBoardModal';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface Props {
  boards: string[]
  setSelectedBoardIndex: Dispatch<SetStateAction<number>>
  selectedBoardIndex: number
}

const Sidebar = (props: Props) => {
  const { boards, setSelectedBoardIndex, selectedBoardIndex } = props
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);

  return (
    <React.Fragment>
      <Stack width={300} bgcolor='white' height='100%' borderRight={'1px solid #E4EBFA'}>
        <Box p={4}>
          <img src={logo} alt="logo" width={152} height={25} />
        </Box>
        <Stack px={4}>
          <Button onClick={() => setOpenModal(true)} variant='outlined' sx={{ textTransform: 'none' }}> + Add New Board</Button>
          <Button sx={{mt: 2, justifyContent: 'space-between', color: 'gray'}} onClick={() => setOpen(prev => !prev)} endIcon={open ? <ExpandLess /> : <ExpandMore />}>
           All Boards ({boards.length})
          </Button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              {boards.map((item, index) =>
                <ListItemButton selected={index === selectedBoardIndex} onClick={() => setSelectedBoardIndex(index)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              )}
            </List>
          </Collapse>
        </Stack>
      </Stack>
      <CreateNewBoardModal openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export default Sidebar