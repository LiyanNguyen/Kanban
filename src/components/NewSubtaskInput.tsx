import React, { Dispatch, SetStateAction, useEffect, useState,  } from 'react'
import { Stack, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  initVal: string
  index: number
  subtask: string[]
  setSubtask: Dispatch<SetStateAction<string[]>>
}

const NewSubtaskInput = (props: Props) => {
  const { initVal, index, subtask, setSubtask } = props
  const [error, setError] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  // needs this useEffect, to retrigger the value of every time we delete an input since the value from parent state changes
  useEffect(() => {
    setValue(initVal)
  }, [initVal])

  const handleItemStateChange = (val: string) => {
    const data = [...subtask];
    data[index] = val;
    setSubtask(data);
  }

  const deleteThisInput = () => {
    const data = [...subtask];
    data.splice(index, 1)
    setSubtask(data)
  }

  return (
    <Stack direction='row' gap={1}>
      <TextField
        error={error} fullWidth variant="outlined" value={value} size='small' autoFocus
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value)
          handleItemStateChange(event.target.value)
          setError(false)
        }}
        helperText={error && 'Cannot be empty'}
      />
      <IconButton onClick={deleteThisInput} color='error'>
        <CloseIcon fontSize='small' />
      </IconButton>
    </Stack>
  )
}

export default NewSubtaskInput 