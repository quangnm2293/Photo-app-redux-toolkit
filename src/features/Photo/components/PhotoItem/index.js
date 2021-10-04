import { removePhoto } from 'features/Photo/photoSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PhotoItem({ photo, category, getCategoryNameFromId, id, title }) {
	const dispatch = useDispatch();

	const history = useHistory();

	const handleRemove = link => {
		dispatch(removePhoto(link));
	};
	const handleEdit = id => {
		history.push(`/photos/${id}`);
	};

	return (
		<div className='relative group overflow-hidden'>
			<img src={photo} alt={photo} className='transition-transform duration-1000 group-hover:scale-125' />
			<p className='absolute text-xs italic top-2 right-2 text-white'>{getCategoryNameFromId(category)}</p>

			<div
				className='absolute transition-opacity opacity-0 duration-1000 group-hover:opacity-100 
                              flex flex-col items-center space-y-2 space-x-3 bottom-[50%] -translate-x-1/2 left-1/2 translate-y-1/2 '
			>
				<p className='text-white capitalize line-clamp-2'>{title}</p>
				<div className='flex space-x-2'>
					<button
						className='outline-white p-2 min-w-[120px] text-white transition-colors 
                                          duration-500 hover:bg-gray-200 hover:text-black'
						onClick={() => handleEdit(id)}
					>
						Edit
					</button>
					<button
						className='outline-red p-2 min-w-[120px] text-red-500 hover:text-white
                              transition-colors duration-500 hover:bg-red-500'
						onClick={() => handleRemove(photo)}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}

export default PhotoItem;
