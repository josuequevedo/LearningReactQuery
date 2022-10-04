import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
export default function fetchDataTraditional() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [errormsn, setErrormsn] = useState('');
	useEffect(() => {
		axios
			.get('https://thronesapi.com/api/v2/Characters')
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	}, []);
	if (isLoading) {
		return (
			<Typography variant='h4'>...Is Loading please wait</Typography>
		);
	}
	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<Box>
			<Navbar />
			<Typography variant='h4' color='initial'>
				Got Characters
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Numer Of Character</TableCell>
							<TableCell>Photo Of Character</TableCell>
							<TableCell align='right'>First Name</TableCell>
							<TableCell align='right'>Last Name</TableCell>
							<TableCell align='right'>Full Name</TableCell>
							<TableCell align='right'>Family</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.slice(0, 11).map((character) => (
							<TableRow
								key={character.id}
								sx={{
									'&:last-child td, &:last-child th': { border: 0 },
								}}
							>
								<TableCell component='th' scope='row'>
									{character.id}
								</TableCell>
								<TableCell align='right'>
									<Avatar
										alt={character.firstName}
										src={character.imageUrl}
									/>
								</TableCell>
								<TableCell align='right'>
									{character.firstName}
								</TableCell>

								<TableCell align='right'>{character.lastName}</TableCell>
								<TableCell align='right'>{character.fullName}</TableCell>
								<TableCell align='right'>{character.family}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
