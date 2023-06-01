import CreateTaskModal from "./components/CreateTaskModal";
import ViewTaskModal from "./components/ViewTaskModal";
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
      <ViewTaskModal />
    </>
  )
}

export default App