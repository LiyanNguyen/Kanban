import { Snackbar, Stack, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { snackbarStore } from '../zustand/snackbarStore';

const DeleteSuccessSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] =
    snackbarStore((state) =>
      [state.openSnackbar, state.setOpenSnackbar])

  return (
    <Snackbar
      children={
        <Stack direction='row' gap={1} alignItems='center' bgcolor='white' py={1.5} px={3} borderRadius={1} boxShadow={1}>
          <CheckIcon fontSize='small' sx={{ color: 'green' }} />
          <Typography textAlign='start' variant='subtitle2' color='#000112'>Task Succesfully Deleted</Typography>
        </Stack>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={openSnackbar}
      autoHideDuration={2000}
      onClose={() => setOpenSnackbar(false)}
    />
  )
}

export default DeleteSuccessSnackbar