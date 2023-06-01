import { useState } from "react";
import Board from "./layouts/Board"
import Sidebar from "./layouts/Sidebar"
import Topbar from "./layouts/Topbar"
import { Stack } from '@mui/material';
import { BoardData } from "./data/BoardData";
import { column } from "./types/column";

const App = () => {
  const [columns, setColumns] = useState<column>(BoardData)
  
  return (
    <Stack flexDirection='row' height='100vh'>
      <Sidebar />
      <Stack width='100%'>
        <Topbar columns={columns} setColumns={setColumns} />
        <Board columns={columns} setColumns={setColumns} />
      </Stack>
    </Stack>
  )
}

export default App