import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd"
import { Stack } from '@mui/material';
import { column } from "../types/column";
import EmptyBoard from "../components/EmptyBoard";
import Column from "../components/Column";
import { onDragEnd } from "../utils/OnDragEnd";

type Props = {
  columns: column
  setColumns: Dispatch<SetStateAction<column>>
}

const Board = (props: Props) => {
  const {columns, setColumns} = props
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
            <Column key={columnID} columnID={columnID} column={column} />
          )}
        </DragDropContext>
      }
    </Stack>
  )
}

export default Board;
