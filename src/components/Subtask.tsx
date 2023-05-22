import React, { Dispatch, SetStateAction, useEffect, useState,  } from 'react'
import { TextField, IconButton, InputAdornment, Stack, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { subtask } from '../types/subtask';

type Props = {
  initVal: string
  index: number
  isCompleted?: boolean
  subtask: subtask[]
  setSubtask: Dispatch<SetStateAction<subtask[]>>
}

const Subtask = (props: Props) => {
  const { initVal, index, isCompleted, subtask, setSubtask } = props
  const [error, setError] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean | undefined>(false)

  // needs this useEffect, to retrigger the value of every time we delete an input since the value from parent state changes
  useEffect(() => {
    setValue(initVal)
    setChecked(isCompleted)
  }, [initVal, isCompleted])

  const onInputChange = (val: string) => {
    const data = [...subtask];
    data[index].title = val
    setSubtask(data);
  }

  const deleteThisInput = () => {
    const data = [...subtask];
    data.splice(index, 1)
    setSubtask(data)
  }

  const onCheckBoxChange = (val: boolean) => {
    setChecked(prev => !prev)
    const data = [...subtask];
    data[index].isCompleted = val
    setSubtask(data);
  }

  return (

    <Stack direction='row' gap={0} alignItems='center'>
      {initVal !== undefined && <Checkbox checked={checked} size='small' onChange={() => onCheckBoxChange(!checked)} />}
      <TextField
        error={error} fullWidth variant="outlined" value={value} size='small' autoFocus disabled={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value)
          onInputChange(event.target.value)
          setError(false)
        }}
        helperText={error && 'Cannot be empty'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={deleteThisInput} color='error' sx={{ padding: 0 }}>
                <CloseIcon fontSize='small' />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Stack>
  )
}

export default Subtask 