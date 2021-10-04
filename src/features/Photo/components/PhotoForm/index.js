import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { addPhoto } from 'features/Photo/photoSlice';
import { FastField, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

function PhotoForm() {
	const dispatch = useDispatch();
	const [photo, setPhoto] = useState('https://picsum.photos/id/237/1920/1080');

	const initialValues = {
		title: '',
		category: null,
	};

	const history = useHistory();

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
		const valuesSubmit = { ...values, photo };
		return new Promise(resolve => {
			setTimeout(() => {
				dispatch(addPhoto(valuesSubmit));
				history.push('/photos');
				resolve();
			}, 2000);
		});
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateSchema}>
			{({ isSubmitting }) => {
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
								Add to album &nbsp;
								{isSubmitting && <span className='animate-pulse text-2xl'>...</span>}
							</button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
