import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { useState } from 'react';
import Select from 'react-select';

function PhotoForm() {
	const [randomPic, setRandomPic] = useState(237);

	return (
		<form className='mx-auto max-w-lg p-10 flex flex-col space-y-7'>
			<div className='flex flex-col'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					name='title'
					placeholder='Eg: Wow nature...'
					className='border border-gray-300 p-[6px] rounded-sm'
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='category'>Category</label>
				<Select
					id='category'
					name='category'
					placeholder={`What's your photo category?`}
					options={PHOTO_CATEGORY_OPTIONS}
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='photo'>Photo</label>
				<button
					className='outline-blue p-1 rounded-sm text-blue-500'
					type='button'
					onClick={() => setRandomPic(Math.trunc(Math.random() * 1000))}
				>
					Random a photo
				</button>

				<div className='rounded-md w-full my-4'>
					<img
						src={`https://picsum.photos/id/${randomPic}/500/300`}
						alt='picks'
						className='rounded-md'
					/>
				</div>
			</div>

			<div>
				<button type='submit' className='p-3 bg-blue-500 text-white rounded-sm'>
					Add to album
				</button>
			</div>
		</form>
	);
}

export default PhotoForm;
