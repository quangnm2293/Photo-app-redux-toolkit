import { Link, NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className='flex justify-between items-center p-3 bg-blue-300'>
			<Link to='/photos'>
				<p className='text-2xl text-purple-600 cursor-pointer font-semibold'>MINT Lala</p>
			</Link>
			<NavLink
				to='/photos'
				exact
				className='text-2xl cursor-pointer transition-colors duration-300 hover:text-red-700'
				activeClassName='text-red-50'
			>
				Redux Project
			</NavLink>
		</header>
	);
}

export default Header;
