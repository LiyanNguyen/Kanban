import React, { Dispatch, SetStateAction, useEffect, useState,  } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { subtask } from '../types/subtask';

type Props = {
  initVal: string
  index: number
  isCompleted?: boolean
  subtask: subtask[]
  setSubtask: Dispatch<SetStateAction<subtask[]>>
}

const NewSubtaskInput = (props: Props) => {
  const { initVal, index, isCompleted, subtask, setSubtask } = props
  const [error, setError] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  // needs this useEffect, to retrigger the value of every time we delete an input since the value from parent state changes
  useEffect(() => {
    setValue(initVal)
  }, [initVal])

  const handleItemStateChange = (val: string) => {
    const data = [...subtask];
    data[index].title = val
    setSubtask(data);
  }

  const deleteThisInput = () => {
    const data = [...subtask];
    data.splice(index, 1)
    setSubtask(data)
  }

  return (
    <TextField
      error={error} fullWidth variant="outlined" value={value} size='small' autoFocus disabled={isCompleted}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        handleItemStateChange(event.target.value)
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
  )
}

export default NewSubtaskInput 