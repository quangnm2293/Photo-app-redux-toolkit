function Banner({ title, backgroundUrl }) {
	const backgroundStyle = backgroundUrl ? { backgroundImage: 'url(' + backgroundUrl + ')' } : {};

	return (
		<section className='h-[400px] flex items-center justify-center' style={backgroundStyle}>
			<h1 className='text-[#ffffffde] text-7xl font-semibold'>{title ? title : ''}</h1>
		</section>
	);
}

export default Banner;
