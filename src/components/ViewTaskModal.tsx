import { Modal, Stack, Typography, IconButton, Box,  Divider, Tooltip } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { subtask } from '../types/subtask'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { task } from '../types/task'
import { columnStore } from '../zustand/columnStore'
import SubtaskItem from './SubtaskItem'

type Props = {
  columnID: string
  id: string
  data: task
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'white',
  borderRadius: 1.5
}

const ViewTaskModal = (props: Props) => {
  const { columnID, id, data, open, setOpen } = props
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [subtask, setSubtask] = useState<subtask[]>([])
  const [completeCount, setCompleteCount] = useState<number>(0)
  const [columns, setColumns] =
    columnStore((state) =>
      [state.columns, state.setColumns])
  
  useEffect(() => {
    if (data !== undefined) {
      setTitle(data.title)
      setDescription(data.description)
      setSubtask(data.subtasks)
    }
  }, [data])

  useEffect(() => {
    const count = subtask.reduce((total, item) => item.isCompleted === true ? total + 1 : total, 0)
    setCompleteCount(count)
  },[subtask])


  const deleteTask = () => {
    if (columnID !== undefined) {
      const newTaskArrayAfterDelete = columns[columnID].tasks.filter(item => item.id !== id)

      setColumns({
        ...columns,
        [columnID]: {
          ...columns[columnID],
          tasks: newTaskArrayAfterDelete
        }
      })
    }
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Stack sx={style} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold' color='#000112'>{title}</Typography>
        <Tooltip title="Close">
          <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <Typography variant='subtitle2' color='#828FA3'>{description}</Typography>
        <Box>
          {subtask.length !== 0 && <Typography mb={1} variant="subtitle2" color='#828FA3'>Subtask ({completeCount} of {subtask.length})</Typography>}
          <PerfectScrollbar style={{ maxHeight: 202, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {subtask?.map((item, index) =>
              <SubtaskItem key={index} title={item.title} index={index} isCompleted={item.isCompleted} subtask={subtask} setSubtask={setSubtask} />
            )}
          </PerfectScrollbar>
        </Box>
        <Divider />
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='subtitle2' color='#828FA3'>Current Status: Doing</Typography>
          <Tooltip title="Delete Task">
            <IconButton
              onClick={deleteTask}
              disabled={title === '' ? true : false}
              sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none', color:'#EA5555' }}>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default ViewTaskModal