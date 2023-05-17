import React, { Dispatch, SetStateAction, useState,  } from 'react'
import { Stack, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	index: number
	subtask: string[]
	setSubtask: Dispatch<SetStateAction<string[]>>
}

const NewSubtaskInput = (props: Props) => {
	const { index, subtask, setSubtask } = props
	const [error, setError] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')

	const handleItemStateChange = (val: string) => {
		const newItemStates = [...subtask];
		newItemStates[index] = val;
		setSubtask(newItemStates);
	}

	const deleteThisInput = () => {
		// setSubtask((item: any) => item.filter((_: string, index: number) => index !== 0));
	}

	return (
		<Stack direction='row' gap={1}>
			<TextField
				error={error} fullWidth variant="outlined" value={value} size='small'
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setValue(event.target.value)
					handleItemStateChange(event.target.value)
					setError(false)
				}}
				helperText={error && 'Cannot be empty'}
			/>
			<IconButton onClick={deleteThisInput}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</Stack>
	)
}

export default NewSubtaskInput 