import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';


interface Props {
  boardName: string
}

const Topbar = (props: Props) => {
  const { boardName } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction='row' alignItems='center' px={4} height={97} bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
      <Typography variant='h6' fontWeight='bold'>{boardName}</Typography>
      <Box>
        <Button variant='outlined' sx={{ textTransform: 'none', gap: 1 }}><AddTaskIcon fontSize='small'/> Add New Task</Button>
        <IconButton onClick={handleClick}>
          <MoreVertIcon sx={{ cursor: 'pointer', fontSize: 20, color: 'gray' }} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
          <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems:'center', gap : 1}}>
            <EditIcon sx={{color:'gray', fontSize: 18}} />
            <Typography variant='body1' color='gray'>Edit</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DeleteOutlineIcon sx={{ color: 'red', fontSize: 18 }} />
            <Typography variant='body1' color='red'>Delete</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Stack>
  )
}

export default Topbar