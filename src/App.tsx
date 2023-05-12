import Board from "./components/Board"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import { Stack } from '@mui/material';

const App = () => {
  return (
    <Stack flexDirection='row' height='100vh'>
      <Sidebar/>
      <Stack width='100%'>
        <Topbar/>
        <Board/>
      </Stack>
    </Stack>
  )
}

export default App