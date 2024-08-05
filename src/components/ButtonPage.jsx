function buttonPage({ href, children }) {
	return (
		<a
			className="absolute shadow-md xl:relative hover:bg-text hover:text-text2  m-2 p-4 text-nowrap bg-button text-bg border-none xl:cursor-pointer rounded-md invisible xl:group-hover:visible xl:group-hover:transition-none "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default buttonPage;