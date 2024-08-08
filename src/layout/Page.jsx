import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ButtonPage from "../components/ButtonPage";

const Page = () => {
	const [links, setLinks] = useState([]);
	const [collapsedSections, setCollapsedSections] = useState({});

	const handleToggle = (sectionId) => {
		setCollapsedSections((prev) => ({
			...prev,
			[sectionId]: !prev[sectionId],
		}));
	};

	useEffect(() => {
		fetch("/data/links.json")
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
				// Inicializa o estado de colapso de todas as seções como true (colapsadas)
				const initialCollapsedState = sortedData.reduce((acc, section) => {
					acc[section.id] = true;
					return acc;
				}, {});
				setCollapsedSections(initialCollapsedState);
			})
			.catch((error) => console.error("Error fetching the links:", error));
	}, []);

	return (
		<>
			<section className="hidden xl:flex flex-row h-screen w-full">
				{links.map((section) => (
					<div
						key={section.id}
						className="group flex relative items-center justify-center hover:w-full flex-col w-1/2 bg-gradient-to-r from-text to-bg hover:from-gray-light hover:to-gray hover:brightness-120 hover:shadow-lg transition-all"
					>
						<ul className="w-full">
							{section.links.map((item) => (
								<li
									key={item.nameUrl}
									className="flex flex-col items-center ease-in-out duration-0"
								>
									<ButtonPage href={item.url}>{item.nameUrl}</ButtonPage>
								</li>
							))}
						</ul>

						<div className="hidden xl:block absolute w-52 text-xl text-nowrap text-center font-semibold p-4 bg-red-dark text-bg uppercase inset-y-auto right-auto bottom-28 rotate-90">
							{section.name}
						</div>
					</div>
				))}
			</section>
			<section className="block xl:hidden relative">
				{links.map((section) => {
					const isCollapsed = collapsedSections[section.id];
					return (
						<div key={section.id}>
							<button
								type="button"
								className="relative flex bg-button text-text items-center w-full p-4 transition-all ease-in group border"
								onClick={() => handleToggle(section.id)}
							>
								<h1 className="font-bold text-sm mr-4">{section.name}</h1>
								<FontAwesomeIcon
									icon={faChevronDown}
									className={`absolute text-text right-0 m-4 transition-transform ${
										isCollapsed ? "" : "rotate-180"
									}`}
								/>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									isCollapsed ? "max-h-0 opacity-0" : "max-h-500px opacity-100"
								}`}
							>
								<ul>
									{section.links.map((item) => (
										<li
											key={item.nameUrl}
											className="flex flex-col items-center ease-in-out duration-0"
										>
											<ButtonPage href={item.url}>{item.nameUrl}</ButtonPage>
										</li>
									))}
								</ul>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Page;
