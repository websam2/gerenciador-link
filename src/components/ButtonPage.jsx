function buttonPage({ href, children }) {
	return (
		<a
			className="lg:flex lg:justify-center w-full text-center shadow-md lg:relative lg:hover:bg-red-dark lg:w-full lg:my-2 p-2 lg:text-wrap bg-red-dark lg:bg-button text-white lg:cursor-pointer lg:invisible lg:group-hover:visible lg:group-hover:transition-none"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default buttonPage;
