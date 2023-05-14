import { useEffect, useState } from "react";
import Board from "./components/Board"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
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
        <Board/>
      </Stack>
    </Stack>
  )
}

export default App