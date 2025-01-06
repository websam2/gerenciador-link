function button({ href, children }) {
	return (
		<a
			className="shadow-md m-2 hover:bg-red-dark lg:p-4 p-1 text-nowrap bg-button text-white border-none lg:cursor-pointer rounded-md "
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
export default button;
