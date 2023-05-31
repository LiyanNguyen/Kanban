import { DropResult } from "@hello-pangea/dnd"
import { column } from "../types/column"
import { Dispatch, SetStateAction } from "react";

export const onDragEnd = (result: DropResult, columns: column, setColumns: Dispatch<SetStateAction<column>>) => {
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