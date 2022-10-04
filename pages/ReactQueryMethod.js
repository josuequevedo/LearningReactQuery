import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function ReactQueryMethod() {
	const { isLoading, data, isError, error, isFetching } = useQuery(
		'characters',
		() => {
			return axios.get('https://thronesapi.com/api/v2/Characters');
		},
		{
			//staleTime video7
			staleTime: 0,
			//refect defaults video8
			refetchOnMount: true,
			refetchOnWindowFocus: true,
		}
	);
	if (isError) {
		return <h2>{error.message}</h2>;
	}

	if (isLoading) {
		return (
			<Typography variant='h3' color='initial'>
				...Is Loading
			</Typography>
		);
	}

	return (
		<>
			<Navbar />
			<Typography variant='h3' color='initial'>
				reactQuery method - got characters
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
						{data?.data.slice(0, 11).map((character) => {
							return (
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

									<TableCell align='right'>
										{character.lastName}
									</TableCell>
									<TableCell align='right'>
										{character.fullName}
									</TableCell>
									<TableCell align='right'>{character.family}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
