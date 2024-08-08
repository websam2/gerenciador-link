function button({ href, children }) {
	return (
		<a
			className="shadow-md w-full hover:bg-red-dark xl:p-4 p-1 text-nowrap bg-button text-bg border-none xl:cursor-pointer rounded-md "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default button;
