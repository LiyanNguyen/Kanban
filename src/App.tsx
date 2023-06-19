import { useState } from "react";
import CreateTaskModal from "./components/CreateTaskModal";
import DeleteSuccessSnackbar from "./components/DeleteSuccessSnackbar";
import Board from "./layouts/Board"
import Topbar from "./layouts/Topbar"
import { Box, Drawer, IconButton } from '@mui/material';
import Sidebar from "./layouts/Sidebar";
import CloseIcon from '@mui/icons-material/Close';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  return (
    <>
      <Box maxHeight='100vh'>
        <Topbar setOpen={setOpenSidebar} />
        <Board />
        <CreateTaskModal />
        <DeleteSuccessSnackbar/>
      </Box>
      <Drawer anchor={'left'} open={openSidebar} onClose={() => setOpenSidebar(false)} >
        <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => setOpenSidebar(false)}>
          <CloseIcon />
        </IconButton>
        <Sidebar/>
      </Drawer>
    </>
  )
}

export default App