import React from 'react'
import { Stack, Box, Typography, ListItemButton, ListItemText, List } from '@mui/material';
import logo from '../assets/logo-dark.svg'

const Sidebar = () => {
	return (
		<React.Fragment>
			<Stack width={300} bgcolor='white' height='100%' borderRight={'1px solid #E4EBFA'}>
				<Box px={'34px'} py={'32px'}>
					<img src={logo} alt="logo" width={152} height={25} />
				</Box>
				<Stack pt={'54px'}>
					<Typography variant='subtitle2' textTransform='uppercase'>All Boards (3)</Typography>
					<List>
						<ListItemButton component="a" sx={{ backgroundColor: '#635FC7', borderRadius: '0 100px 100px 0'}}>
							<ListItemText primary="Board 1" sx={{color:'white'}}/>
						</ListItemButton>
						<ListItemButton component="a">
							<ListItemText primary="Board 2" />
						</ListItemButton>
						<ListItemButton component="a">
							<ListItemText primary="Board 3" />
						</ListItemButton>
					</List>
				</Stack>
			</Stack>
		</React.Fragment>
	)
}

export default Sidebar