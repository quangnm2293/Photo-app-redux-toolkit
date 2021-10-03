import { PlusIcon } from '@heroicons/react/outline';
import Banner from 'components/Banner';
import { NavLink, useRouteMatch } from 'react-router-dom';

function MainPage() {
	const match = useRouteMatch();
	return (
		<div>
			<Banner
				backgroundUrl={
					'https://i.picsum.photos/id/1011/1920/400.jpg?hmac=Y4GtRbkKM8HE9LlGnsQQo_VNMM3eBvhiKiyzFonm6AI'
				}
				title='Your awesome photos'
			/>

			<NavLink
				to={`${match.url}/add`}
				className='flex space-x-2 items-center outline-blue p-2 max-w-xs mx-auto justify-center my-4 cursor-pointer'
			>
				<p>Add new photo </p>
				<PlusIcon className='h-4' />
			</NavLink>
		</div>
	);
}

export default MainPage;
