function button({ href, children }) {
	return (
		<a
			className="hover:bg-text hover:text-text2 m-2 p-4 text-nowrap bg-button text-bg border-none xl:cursor-pointer rounded-md "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default button;
