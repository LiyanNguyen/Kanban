import { Stack } from '@mui/material';
import EmptyBoard from '../components/EmptyBoard';
import React, { useEffect, useState } from 'react';
import Column from '../components/Column';
import { boardStore } from '../zustand/boardStore';
import boardData from '../data/boardData' //fake data for now - same on all boards (boardIndex)
import { task } from '../types/task';

const Board = () => {
  const [boardIndex] = boardStore((state) => [state.boardIndex])
  const [todoTasks, setTodoTasks] = useState<task []>([])
  const [doingTasks, setDoingTasks] = useState<task []>([])
  const [doneTasks, setDoneTasks] = useState<task[]>([])
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    console.log(boardIndex)
    setTodoTasks(boardData.filter(item => item.status === 'Todo'))
    setDoingTasks(boardData.filter(item => item.status === 'Doing'))
    setDoneTasks(boardData.filter(item => item.status === 'Done'))

    if (todoTasks.length === 0 && doingTasks.length === 0 && doneTasks.length === 0) setIsEmpty(true)
    else setIsEmpty(false)

  }, [boardIndex, todoTasks.length, doingTasks.length, doneTasks.length])

  return (
    <Stack direction='row' bgcolor='#F4F7FD' width='100%' height='100%' justifyContent={isEmpty ? 'center' : 'space-between'} p={3} gap={3}>
      {isEmpty ? <EmptyBoard /> :
        <React.Fragment>
          <Column tasks={todoTasks} type='Todo' />
          <Column tasks={doingTasks} type='Doing' />
          <Column tasks={doneTasks} type='Done' />
        </React.Fragment>
      }
    </Stack>
  )
}

export default Board