import { Box, Button, Stack, Typography } from '@mui/material'
import TaskCard from './TaskCard'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { task } from '../types/task'
import { column } from '../types/column'
import { v4 as uuidv4 } from 'uuid';

type Props = {
  columnID: string
  column: {
    name: string
    tasks: task[]
  }
  columns: column
  setColumns: Dispatch<SetStateAction<column>>
}

const Column = (props: Props) => {
  const { columnID, column, columns, setColumns } = props
  const [badgeColor, setBadgeColor] = useState<string>('')
  const [todoColumnID, setTodoColumnID] = useState<string>('')

  useEffect(() => {
    if (column.name === 'Todo') setBadgeColor('#49C4E5'); setTodoColumnID(columnID)
    if (column.name === 'Doing') setBadgeColor('#8471F2')
    if (column.name === 'Done') setBadgeColor('#67E2AE')
  }, [column.name, columnID])

  const addNewTask = () => {
    const newTask = {
      id: uuidv4(),
      title: 'Sample Task',
      description: 'Sample Description',
      subtasks: [
        { title: 'This is finally working', isCompleted: false },
        { title: 'Holy fucking fuck', isCompleted: false },
      ]
    }

    setColumns({
      ...columns,
      [todoColumnID]: {
        ...columns[todoColumnID],
        tasks: [newTask, ...columns[todoColumnID].tasks]
      }
    })
  }
  
  return (
    <Stack width='100%' gap={2}>
      <Stack direction='row' gap={1.5}>
        <Box width={15} height={15} borderRadius='50%' bgcolor={badgeColor} />
        <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>{column.name} ({column.tasks.length})</Typography>
      </Stack>
      {column.name === 'Todo' && <Button variant='outlined' onClick={addNewTask}>Add Sample</Button> }
      <Droppable droppableId={columnID} key={columnID}>
        {(provided, snapshot) =>
          <Stack bgcolor={snapshot.isDraggingOver ? '#E9EFFA' : 'none'} ref={provided.innerRef} {...provided.droppableProps} height='100%'>
            {column.tasks.map((item: task, index: number) =>
              <Draggable key={item.id} index={index} draggableId={item.id}>
                {(provided, snapshot) =>
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{ ...provided.draggableProps.style }}>
                    <TaskCard id={item.id} isDragging={snapshot.isDragging} data={item} />
                  </div>
                }
              </Draggable>
            )}
            {provided.placeholder}
          </Stack>
        }
      </Droppable>
    </Stack>
  )
}

export default Column