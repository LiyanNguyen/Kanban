import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd"
import { Stack } from '@mui/material';
import { column } from "../types/column";
import EmptyBoard from "../components/EmptyBoard";
import Column from "../components/Column";
import { BoardData } from "../data/BoardData";
import { onDragEnd } from "../utils/OnDragEnd";

const Board = () => {
  const [columns, setColumns] = useState<column>(BoardData)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    if (columns.length === null) setIsEmpty(true)
    else setIsEmpty(false)

  }, [columns])

  return (
    <Stack direction='row' bgcolor='#F4F7FD' width='100%' height='100%' justifyContent={isEmpty ? 'center' : 'space-between'} p={3} gap={3}>
      {isEmpty ? <EmptyBoard /> :
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnID, column]) =>
            <Column key={columnID} columnID={columnID} column={column} columns={columns} setColumns={setColumns} />
          )}
        </DragDropContext>
      }
    </Stack>
  )
}

export default Board;
