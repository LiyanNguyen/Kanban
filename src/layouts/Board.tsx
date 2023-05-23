import { Stack } from '@mui/material';
import EmptyBoard from '../components/EmptyBoard';
import React, { useEffect } from 'react';
import Column from '../components/Column';
import { boardStore } from '../zustand/boardStore';
import columnData   from '../data/columnData'

const Board = () => {
  const [boardIndex] = boardStore((state) => [state.boardIndex])

  useEffect(() => {
    console.log(boardIndex)
  })


  return (
    <Stack direction='row' bgcolor='#F4F7FD' width='100%' height='100%' justifyContent={columnData === undefined ? 'center' : 'space-between'} p={3} gap={3}>
      {columnData === undefined ? <EmptyBoard /> :
        <React.Fragment>
          {columnData.map(item => 
            <Column key={item.name} type={item.name} />
          )}
        </React.Fragment>
      }
    </Stack>
  )
}

export default Board