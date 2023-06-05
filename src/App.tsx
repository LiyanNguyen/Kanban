import CreateTaskModal from "./components/CreateTaskModal";
import DeleteSuccessSnackbar from "./components/DeleteSuccessSnackbar";
import Board from "./layouts/Board"
import Topbar from "./layouts/Topbar"
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box maxHeight='100vh'>
      <Topbar />
      <Board />
      <CreateTaskModal />
      <DeleteSuccessSnackbar/>
    </Box>
  )
}

export default App