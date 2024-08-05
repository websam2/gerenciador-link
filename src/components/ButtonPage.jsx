function buttonPage({ href, children }) {
	return (
		<a
			className="absolute xl:flex xl:justify-center shadow-md xl:relative hover:bg-red-dark w-full my-2 p-2 text-wrap bg-button text-bg xl:cursor-pointer invisible xl:group-hover:visible xl:group-hover:transition-none "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default buttonPage;