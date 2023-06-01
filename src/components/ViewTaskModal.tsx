import { Modal, Stack, Typography, IconButton, Box,  Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { task } from '../types/task'
import Subtask from './Subtask'
import CloseIcon from '@mui/icons-material/Close'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { subtask } from '../types/subtask'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// type Props = {
//   columnID: string
//   taskID: string
//   data: task
// }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'white',
  borderRadius: 1.5
}

const ViewTaskModal = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [subtask, setSubtask] = useState<subtask[]>([])
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setTitle('Research pricing points of various competitors')
    setDescription('We know what we’re planning to build for version one. Now we need to finalise the first pricing model we’ll use.')
    setSubtask([
      { title: 'Research competitor pricing', isCompleted: true },
      { title: 'Outline a business model', isCompleted: true },
      { title: 'Talk to potential customers', isCompleted: false }
    ])
  },[])
  

  // useEffect(() => {
  //   if (data !== undefined) {
  //     setTitle(data.title)
  //     setDescription(data.description)
  //     setSubtask(data.subtasks)
  //   }
  // }, [data])

  // const updateTask = () => {
  //   if (columnID !== undefined) {
  //     const taskArray = columns[columnID].tasks
  //     const itemIndex = columns[columnID].tasks.findIndex(item => item.id === taskID)
  //     const taskItem = taskArray[itemIndex]

  //     taskItem.title = title
  //     taskItem.description = description
  //     taskItem.subtasks = subtask

  //     setColumns({
  //       ...columns,
  //       [columnID]: {
  //         ...columns[columnID],
  //         tasks: taskArray
  //       }
  //     })

  //     setOpenTaskModal(false)
  //   }
  // }
  
  // const deleteTask = () => {
  //   if (columnID !== undefined) {
  //     const newTaskArrayAfterDelete = columns[columnID].tasks.filter(item => item.id !== taskID)

  //     setColumns({
  //       ...columns,
  //       [columnID]: {
  //         ...columns[columnID],
  //         tasks: newTaskArrayAfterDelete
  //       }
  //     })
  //   }
  // }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold' color='#000112'>{title}</Typography>
        <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Typography variant='subtitle2' color='#828FA3'>{description}</Typography>
        <Box>
          {subtask.length !== 0 && <Typography mb={1} variant="subtitle2" color='#828FA3'>Subtask (2 of {subtask.length})</Typography>}
          <PerfectScrollbar style={{ maxHeight: 152, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {subtask?.map((item, index) =>
              <Subtask key={index} initVal={item.title} index={index} isCompleted={item.isCompleted} subtask={subtask} setSubtask={setSubtask} hasCheckBox={true} />
            )}
          </PerfectScrollbar>
        </Box>
        <Divider />
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='subtitle2' color='#828FA3'>Current Status: Doing</Typography>
          <IconButton
            disabled={title === '' ? true : false}
            sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none', color:'#EA5555' }}>
            <DeleteForeverIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default ViewTaskModal