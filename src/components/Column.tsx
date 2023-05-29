import { Box, Stack, Typography } from '@mui/material'
import TaskCard from './TaskCard'
import { useEffect, useState } from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { column } from '../types/column'

type Props = {
  columnID: string
  column: any
}

const Column = (props: Props) => {
  const { columnID, column } = props
  const [badgeColor, setBadgeColor] = useState<string>('') 

  useEffect(() => {
    if (column?.name === 'Todo') setBadgeColor('#49C4E5')
    if (column?.name === 'Doing') setBadgeColor('#8471F2')
    if (column?.name === 'Done') setBadgeColor('#67E2AE')
  }, [column])
  
  return (
    <Stack width='100%' gap={2}>
      <Stack direction='row' gap={1.5}>
        <Box width={15} height={15} borderRadius='50%' bgcolor={badgeColor} />
        <Typography color='#828FA3' textTransform='uppercase' fontWeight='bold' fontSize={12}>{column.name} ({column.tasks.length})</Typography>
      </Stack>
      <Droppable droppableId={columnID} key={columnID}>
        {(provided, snapshot) =>
          <Stack bgcolor={snapshot.isDraggingOver ? '#E9EFFA' : 'none'} ref={provided.innerRef} {...provided.droppableProps} height='100%'>
            {column.tasks.map((item: any, index: number) =>
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