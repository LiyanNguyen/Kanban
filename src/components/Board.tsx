import { Stack } from '@mui/material';
import EmptyBoard from './EmptyBoard';
interface Props {
	columns?: string []
}


const Board = (props: Props) => {
	const { columns } = props

	return (
		<Stack direction='row' bgcolor='#F4F7FD' width='100%' height='100%' justifyContent='center'>
			{columns ?? <EmptyBoard/>}
		</Stack>
	)
}

export default Board