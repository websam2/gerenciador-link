function buttonPage({ href, children }) {
	return (
		<a
			className="absolute xl:flex xl:justify-center shadow-md xl:relative xl:hover:bg-red-dark xl:w-full my-2 p-2 xl:text-wrap bg-button text-bg xl:cursor-pointer invisible group-hover:visible group-hover:transition-none "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default buttonPage;