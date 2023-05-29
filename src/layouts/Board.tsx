import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from 'uuid';
import { Stack } from '@mui/material';
import TodoTasks from "../data/TodoTasks";
import { column } from "../types/column";
import EmptyBoard from "../components/EmptyBoard";
import Column from "../components/Column";

const columnsFromBackend: column = {
  [uuidv4()]: {
    name: 'Todo',
    tasks: TodoTasks
  },
  [uuidv4()]: {
    name: 'Doing',
    tasks: []
  },
  [uuidv4()]: {
    name: 'Done',
    tasks: []
  }
}

const onDragEnd = (result: DropResult, columns: column, setColumns: React.Dispatch<React.SetStateAction<column>>) => {
  if (!result.destination) return
  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.tasks]
    const destItems = [...destColumn.tasks]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        tasks: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        tasks: destItems
      }
    })
  }
  
  else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.tasks]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        tasks: copiedItems
      }
    })
  }
}

const TestBoard = () => {
  const [columns, setColumns] = useState<column>(columnsFromBackend)
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
  );
}

export default TestBoard;
