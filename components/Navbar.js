import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
	return (
		<>
			<AppBar position='relative' color='primary'>
				<Toolbar>
					<Typography variant='h6'>React - Query</Typography>
					<Button
						variant='text'
						href={'/'}
						sx={{
							bgcolor: 'red',
							color: '#fff',
							ml: '100px',
						}}
					>
						<Link href={'/'}>Home</Link>
					</Button>
					<Button
						variant='text'
						sx={{
							bgcolor: 'red',
							color: '#fff',
							ml: '200px',
						}}
					>
						<Link href={'/fetchDataTraditional'}>
							Traditional method
						</Link>
					</Button>
					<Button
						variant='text'
						sx={{
							bgcolor: 'red',
							color: '#fff',
							ml: '300px',
						}}
					>
						<Link href={'/ReactQueryMethod'}>React-Query Method</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
}
