import { Dispatch, SetStateAction, useEffect, useState, } from 'react'
import { Checkbox, Box, Typography, FormControlLabel } from '@mui/material';
import { subtask } from '../types/subtask';

type Props = {
  title: string
  index: number
  isCompleted?: boolean
  subtask: subtask[]
  setSubtask: Dispatch<SetStateAction<subtask[]>>
}

const SubtaskItem = (props: Props) => {
  const { title, index, isCompleted, subtask, setSubtask } = props
  const [checked, setChecked] = useState<boolean | undefined>(false)

  // needs this useEffect, to retrigger the value of every time we delete an input since the value from parent state changes
  useEffect(() => {
    setChecked(isCompleted)
  }, [isCompleted])

  const onCheckBoxChange = (val: boolean) => {
    setChecked(prev => !prev)
    const data = [...subtask];
    data[index].isCompleted = val
    setSubtask(data);
  }

  return (
    <Box p={1.5} bgcolor='#F4F7FD' borderRadius={1}>
      <FormControlLabel
        control={<Checkbox checked={checked} size='small' onChange={() => onCheckBoxChange(!checked)} />}
        label={<Typography variant='subtitle2' sx={{ textDecoration: checked ? 'line-through' : 'none'}} fontWeight='bold' color={checked ? '#828FA3' : '#000112'}>{title}</Typography>} />
    </Box>
  )
}

export default SubtaskItem 