function buttonPage({ href, children }) {
	return (
		<a
			className="xl:flex xl:justify-center w-full text-center shadow-md xl:relative xl:hover:bg-red-dark xl:w-full my-2 p-2 xl:text-wrap bg-red-dark xl:bg-button text-bg xl:cursor-pointer xl:invisible xl:group-hover:visible xl:group-hover:transition-none "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default buttonPage;