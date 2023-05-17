import { useEffect, useState } from "react";
import Board from "./layouts/Board"
import Sidebar from "./layouts/Sidebar"
import Topbar from "./layouts/Topbar"
import { Stack } from '@mui/material';

const App = () => {
  const [boards, setBoards] = useState<string []>([])
  const [selectedBoardIndex, setSelectedBoardIndex] = useState<number>(0)

  useEffect(() => {
    setBoards(['Platform Launch', 'Marketing Plan','Roadmap',])
  },[])

  return (
    <Stack flexDirection='row' height='100vh'>
      <Sidebar
        boards={boards}
        setBoards={setBoards}
        selectedBoardIndex={selectedBoardIndex}
        setSelectedBoardIndex={setSelectedBoardIndex}
      />
      <Stack width='100%'>
        <Topbar boardName={boards[selectedBoardIndex]} />
        <Board columns={[]}/>
      </Stack>
    </Stack>
  )
}

export default App