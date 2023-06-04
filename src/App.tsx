import CreateTaskModal from "./components/CreateTaskModal";
import DeleteSuccessSnackbar from "./components/DeleteSuccessSnackbar";
import Board from "./layouts/Board"
import Sidebar from "./layouts/Sidebar"
import Topbar from "./layouts/Topbar"
import { Stack } from '@mui/material';

const App = () => {
  return (
    <>
      <Stack flexDirection='row' height='100vh'>
        <Sidebar />
        <Stack width='100%'>
          <Topbar />
          <Board />
        </Stack>
      </Stack>
      <CreateTaskModal />
      <DeleteSuccessSnackbar/>
    </>
  )
}

export default App