import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';

function AddEdit() {
	return (
		<div>
			<Banner
				title='Pick your amazing photo'
				backgroundUrl='https://i.picsum.photos/id/1015/1920/400.jpg?hmac=07IHa5rOrHB48eXwQ1JbwTMRvFW6P6YsQULI-FdzsQ8'
			/>

			<PhotoForm />
		</div>
	);
}

export default AddEdit;
