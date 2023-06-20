import { Button, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { modalStore } from '../zustand/modalStore';
import MenuOpenIcon from '@mui/icons-material/MenuOpenRounded';
import { Dispatch, SetStateAction, useState, MouseEvent} from 'react';
import DeleteBoardModal from '../components/DeleteBoardModal';
import BoardModal from '../components/BoardModal';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Topbar = (props: Props) => {
  const { setOpen } = props
  const [setOpenTaskModal] = modalStore((state) => [state.setOpenTaskModal])
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  return (
    <>
      <Stack direction='row' alignItems='center' px={[1,3,3]} py={1.5} bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
        <Stack direction='row' alignItems='center'>
          <Tooltip title="Open Boards">
            <IconButton size='small' onClick={() => setOpen(true)}>
              <MenuOpenIcon htmlColor='#635FC7' fontSize='large' sx={{rotate: '180deg'}}/>
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography fontSize={[16, 24, 24]} fontWeight='bold'>Platform Launch</Typography>          
        <Stack direction='row' alignItems='center'>
          <IconButton sx={{display:['block','none']}} size='small' onClick={() => setOpenTaskModal(true)}>
            <AddTaskIcon htmlColor='#635FC7' fontSize='medium' />
          </IconButton>
          <Button size='small' onClick={() => setOpenTaskModal(true)} variant='outlined' sx={{ textTransform: 'none', gap: 1, display: ['none', 'flex'], color: '#635FC7', borderColor: '#635FC7' }}><AddTaskIcon fontSize='small' /> Add New Task</Button>
          <Tooltip title='Options' sx={{ml: 1}}>
            <IconButton size='small' onClick={handleClick}>
              <MoreVertOutlinedIcon htmlColor='#828FA3' fontSize='small' />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => {setOpenEditModal(true); setAnchorEl(null)}} sx={{ color: '#828FA3' }}>Edit</MenuItem>
            <MenuItem onClick={() => {setOpenDeleteModal(true); setAnchorEl(null)}} sx={{ color: '#828FA3' }}>Delete</MenuItem>
          </Menu>
        </Stack>
      </Stack>
      <BoardModal isEditing boardName='Platform Launch' openModal={openEditModal} setOpenModal={setOpenEditModal}/>
      <DeleteBoardModal itemName='Platform Launch' openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} / >
    </>
  )
}

export default Topbar