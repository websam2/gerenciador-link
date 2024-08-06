import React, { useState, useEffect } from "react";
import ButtonPage from "../components/ButtonPage";

const Page = () => {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		fetch("/links.json")
			.then((response) => response.json())
			.then((data) => {
				// Ordena os links de cada seção alfabeticamente pelo nameUrl
				const sortedData = data.map((section) => ({
					...section,
					links: [...section.links].sort((a, b) =>
						a.nameUrl.localeCompare(b.nameUrl),
					),
				}));
				setLinks(sortedData);
			})
			.catch((error) => console.error("Error fetching the links:", error));
	}, []);

	return (
		<section className="flex flex-col xl:flex-row xl:h-screen xl:w-full">
			{links.map((section) => (
				<section
					key={section.id}
					className="group xl:flex xl:relative items-center xl:justify-center hover:w-full xl:flex-col xl:w-1/2 xl:bg-gradient-to-r xl:from-text xl:to-bg xl:hover:from-gray-light xl:hover:to-gray xl:cursor-pointer xl:hover:brightness-120 xl:hover:shadow-lg xl:transition-all"
				>
					<ul className="md:w-1/2 xl:w-full">
						{section.links.map((item) => (
							<li
								key={item.nameUrl}
								className="flex xl:flex-col xl:items-center xl:ease-in-out xl:duration-0"
							>
								<ButtonPage href={item.url}>{item.nameUrl}</ButtonPage>
							</li>
						))}
					</ul>
					<div className="xl:absolute xl:w-52 xl:text-xl xl:text-nowrap text-center font-semibold p-4 bg-red-dark text-bg uppercase xl:inset-y-auto xl:right-auto xl:bottom-28 xl:rotate-90">
						{section.name}
					</div>
				</section>
			))}
		</section>
	);
};

export default Page;
