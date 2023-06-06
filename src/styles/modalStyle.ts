import { SxProps, Theme } from "@mui/material";

export const modalStyle: SxProps<Theme> = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: ['90%', 480],
	bgcolor: 'white',
	borderRadius: 1.5
}