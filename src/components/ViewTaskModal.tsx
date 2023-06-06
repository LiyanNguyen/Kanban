import { Modal, Stack, Typography, IconButton, Box,  Divider, Tooltip, Button, Avatar } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { subtask } from '../types/subtask'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { task } from '../types/task'
import { columnStore } from '../zustand/columnStore'
import { snackbarStore } from '../zustand/snackbarStore'
import SubtaskItem from './SubtaskItem'
import { modalStyle } from '../styles/modalStyle'

type Props = {
  columnName: string
  columnID: string
  id: string
  data: task
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ViewTaskModal = (props: Props) => {
  const { columnName, columnID, id, data, open, setOpen } = props
  const [subtask, setSubtask] = useState<subtask[]>(data.subtasks)
  const [completeCount, setCompleteCount] = useState<number>(0)
  const [statusColor, setStatusColor] = useState<string>('')
  const [setOpenSnackbar] = snackbarStore((state) => [state.setOpenSnackbar])
  const [columns, setColumns] =
    columnStore((state) =>
      [state.columns, state.setColumns])
  
  useEffect(() => {
    const count = subtask.reduce((total, item) => item.isCompleted === true ? total + 1 : total, 0)
    setCompleteCount(count)
  }, [subtask])
  
  useEffect(() => {
    if (columnName === 'Todo') setStatusColor('#49C4E5')
    if (columnName === 'Doing') setStatusColor('#8471F2')
    if (columnName === 'Done') setStatusColor('#67E2AE')
  }, [columnName])


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

      setOpenSnackbar(true)
    }
  }

  return (
    <Modal disableAutoFocus open={open} onClose={() => setOpen(false)}>
      <Stack sx={modalStyle} p={4} gap={2}>
        <Typography variant="h6" fontWeight='bold' color='#000112'>{data.title}</Typography>
        <Tooltip title="Close">
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => setOpen(false)}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Tooltip>
        <Typography variant='subtitle2' color='#828FA3'>{data.description}</Typography>
        <Box>
          {subtask.length !== 0 && <Typography mb={1} variant="subtitle2" color='#828FA3'>Subtask: {completeCount} / {subtask.length}</Typography>}
          <PerfectScrollbar style={{ maxHeight: 202, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {subtask?.map((item, index) =>
              <SubtaskItem key={index} title={item.title} index={index} isCompleted={item.isCompleted} subtask={subtask} setSubtask={setSubtask} />
            )}
          </PerfectScrollbar>
        </Box>
        <Divider />
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack gap={0.5}>
            <Typography variant='subtitle2' color='#828FA3'>Status:&nbsp;
              <span style={{ color: statusColor, fontWeight: 'bold' }}>
                {columnName}
              </span>
            </Typography>
            <Stack direction='row' gap={1} alignItems='center'>
              <Avatar src={data.assignee.picture} alt={data.assignee.name} sx={{ width: 28, height: 28 }} />
              <Typography color='#828FA3' variant='subtitle2'>{data.assignee.name}</Typography>
            </Stack>
          </Stack>
          <Tooltip title="Delete Task">
            <IconButton
              onClick={deleteTask}
              sx={{ width: 'max-content', alignSelf: 'center', textTransform: 'none', color:'#EA5555' }}>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Button
          children={<>OK</>}
          variant='outlined' onClick={() => setOpen(false)}
          sx={{ width: 'max-content', alignSelf: 'center'}}
        />
      </Stack>
    </Modal>
  )
}

export default ViewTaskModal