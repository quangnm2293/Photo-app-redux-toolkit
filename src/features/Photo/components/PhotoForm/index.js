/* eslint-disable react-hooks/exhaustive-deps */
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { FastField, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as Yup from 'yup';

function PhotoForm() {
	const dispatch = useDispatch();
	const [photo, setPhoto] = useState('https://picsum.photos/id/237/1920/1080');

	const photoList = useSelector(state => state.photos);

	const history = useHistory();

	const match = useRouteMatch();
	const {
		params: { photoId },
	} = match;

	const editPhoto = photoList.find(photo => photo.id === Number(photoId));

	const initialValues = {
		title: photoId ? editPhoto.title : '',
		category: photoId ? editPhoto.category : null,
	};

	useEffect(() => {
		if (photoId) setPhoto(editPhoto.photo);
	}, []);

	const validateSchema = Yup.object().shape({
		title: Yup.string().required('This field is required.'),
		category: Yup.number().required('This field is required.').nullable(),
	});

	const handleRandom = () => {
		var id = Math.trunc(Math.random() * 1000);
		var url = `https://picsum.photos/id/${id}/1920/1080`;
		setPhoto(url);
	};

	const handleSubmit = values => {
		const id = Math.trunc(Math.random() * 10000);
		const valuesSubmit = { ...values, photo, id };

		if (photoId) {
			dispatch(updatePhoto({ ...values, id: Number(photoId), photo }));
		} else {
			dispatch(addPhoto(valuesSubmit));
		}
		history.push('/photos');
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateSchema}>
			{() => {
				//Logic here...
				return (
					<Form className='mx-auto max-w-lg p-10 flex flex-col space-y-7'>
						<FastField
							name='title'
							component={InputField}
							label='Title'
							placeholder='Eg: Wow nature...'
						/>
						<FastField
							name='category'
							component={SelectField}
							label='Category'
							placeholder={`What's your photo category?`}
							options={PHOTO_CATEGORY_OPTIONS}
						/>

						<div className='flex flex-col'>
							<label htmlFor='photo'>Photo</label>
							<button
								className='outline-blue p-1 rounded-sm text-blue-500 transition-colors duration-500 hover:bg-blue-200'
								type='button'
								onClick={handleRandom}
							>
								Random a photo
							</button>

							<div className='rounded-md w-full my-4 object-contain'>
								<img
									src={photo}
									alt='Oops... Not found. Please random again!'
									className='rounded-md'
								/>
							</div>
						</div>

						<div>
							<button type='submit' className='p-3 bg-blue-500 text-white rounded-sm'>
								{photoId ? 'Update your photo' : 'Add to album'}
							</button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
