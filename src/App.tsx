import Board from "./layouts/Board"
import Sidebar from "./layouts/Sidebar"
import TestBoard from "./layouts/TestBoard";
import Topbar from "./layouts/Topbar"
import { Stack } from '@mui/material';

const App = () => {
  return (
    <Stack flexDirection='row' height='100vh'>
      <Sidebar />
      <Stack width='100%'>
        <Topbar />
        {/* <Board /> */}
        <TestBoard/>
      </Stack>
    </Stack>
  )
}

export default App