import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd"
import { Stack } from '@mui/material';
import EmptyBoard from "../components/EmptyBoard";
import Column from "../components/Column";
import { onDragEnd } from "../utils/OnDragEnd";
import { columnStore } from "../zustand/columnStore";

const Board = () => {
  const [columns, setColumns] = columnStore((state) => [state.columns, state.setColumns])
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    const taskCountArray = Object.entries(columns).map(([, column]) => column.tasks.length)
    const tasksCount = taskCountArray.reduce((total, item) => total + item, 0)

    if (tasksCount === 0) setIsEmpty(true)
    else setIsEmpty(false)

  }, [columns])

  return (
    <Stack direction={['column', 'row']} bgcolor='#F0F4FC' height={['max-content', 'calc(100vh - 85px)']} justifyContent={isEmpty ? 'center' : 'flex-start'} p={3} gap={3}>
      {isEmpty ? <EmptyBoard /> :
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnID, column]) =>
            <Column key={columnID} columnID={columnID} column={column} />
          )}
        </DragDropContext>
      }
    </Stack>
  )
}

export default Board;
