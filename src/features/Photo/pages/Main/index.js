import { PlusIcon } from '@heroicons/react/outline';
import Banner from 'components/Banner';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import PhotoItem from 'features/Photo/components/PhotoItem';
import { useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';

function MainPage() {
	const match = useRouteMatch();
	const photoList = useSelector(state => state.photos);

	const getCategoryNameFromId = id => {
		return PHOTO_CATEGORY_OPTIONS.filter(p => p.value === id)[0].label;
	};

	return (
		<div className='pb-10'>
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

			<div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
				{photoList.map(({ photo, category }, i) => (
					<PhotoItem
						key={i}
						photo={photo}
						category={category}
						getCategoryNameFromId={getCategoryNameFromId}
					/>
				))}
			</div>
		</div>
	);
}

export default MainPage;
