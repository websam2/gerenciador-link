import { useEffect, useState } from "react";
import logoDAEE from "/logoDAEE.svg";

const Home = () => {
	const [currentDateTime, setCurrentDateTime] = useState(
		new Date().toLocaleString(),
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDateTime(new Date().toLocaleString());
		}, 1000);

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);
	return (
		<section
			className="flex flex-col items-center h-full xl:w-1/3 xl:justify-between relative bg-gradient-to-bl from-blue-dark to-blue text-center xl:cursor-pointer"
			id="listItems"
		>
			<img className="m-4 w-32 xl:cursor-pointer" src={logoDAEE} alt="DAEE" />
			<h1 className="text-wrap font-bold text-text text-2xl m-4">
				Todos os sites em um único só lugar!
			</h1>
			<div>
				<a
					className="hover:bg-text hover:text-text2 m-2 p-4 text-nowrap bg-button text-bg border-none xl:cursor-pointer rounded-md "
					href="https://governosp.sharepoint.com/sites/intranet.daee/SitePages/TopicHome.aspx"
					target="_blank"
					rel="noopener noreferrer"
				>
					Intranet
				</a>
				<a
					className="hover:bg-text hover:text-text2 m-2 p-4 text-nowrap bg-button text-bg border-none xl:cursor-pointer rounded-md "
					href="https://outlook.office.com/mail/"
					target="_blank"
					rel="noopener noreferrer"
				>
					E-mail
				</a>
			</div>

			<p className="text-text text-lg">{currentDateTime}</p>
		</section>
	);
};

export default Home;
