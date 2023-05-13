import { Button, Stack, Typography } from '@mui/material';

interface Props {
  boardName: string
}

const Topbar = (props: Props) => {
  const { boardName } = props

  return (
    <Stack direction='row' alignItems='center' px={6} height={97} bgcolor='white' borderBottom={'1px solid #E4EBFA'} justifyContent='space-between'>
      <Typography variant='h6' fontWeight='bold'>{boardName}</Typography>
      <Button variant='outlined' sx={{textTransform: 'none'}}>+ Add New Task</Button>
    </Stack>
  )
}

export default Topbar