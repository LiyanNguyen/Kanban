import { useEffect, useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from 'uuid';
import { Box, Stack, Typography } from '@mui/material';
import TaskCard from "../components/TaskCard";
import TodoTasks from "../data/TodoTasks";
import { column } from "../types/column";

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
    console.log(columns) // state is properly changing
  }, [columns])

  return (
    <Stack direction='row' bgcolor='#F4F7FD' width='100%' height='100%' justifyContent={isEmpty ? 'center' : 'space-between'} p={3} gap={3}>
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column]) => 
          <Stack key={columnId} width='100%' gap={2}>
            <Stack direction='row' gap={1.5}>
              <Box width={15} height={15} borderRadius='50%' bgcolor='#49C4E5' />
              <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>{column.name} ({column.tasks.length})</Typography>
            </Stack>
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => 
                <Stack bgcolor={snapshot.isDraggingOver ? '#E9EFFA': 'none'} ref={provided.innerRef} {...provided.droppableProps} height='100%'>
                  {column.tasks.map((item, index) => 
                    <Draggable key={item.id} index={index} draggableId={item.id}>
                      {(provided, snapshot) => 
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{...provided.draggableProps.style}}>
                          <TaskCard isDragging={snapshot.isDragging} data={item}/>
                        </div>
                      }
                    </Draggable>                      
                  )}
                  {provided.placeholder}
                </Stack>
              }
            </Droppable>
          </Stack>
        )}
      </DragDropContext>
    </Stack>
  );
}

export default TestBoard;
