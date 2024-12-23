import { useEffect, useState } from "react";
import logoDAEE from "/SPAguas.svg";
import Accordion from "../components/Accordion";
import Button from "../components/Button";

import Ouvidoria from "../assets/images/Ouvidoria.jpg";
import FavoriteButton from "../components/FavoriteButton";
import Search from "../components/Search";

const images = [Ouvidoria];

const Home = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const openFullScreen = () => {
		setIsFullScreen(true);
	};

	const closeFullScreen = () => {
		setIsFullScreen(false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 15000); // 15000ms = 15 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="flex flex-col p-4 items-center h-full xl:w-1/3 xl:justify-between relative bg-gradient-to-bl from-blue-dark to-blue text-center">
			<FavoriteButton />
			<div className="flex flex-col items-center">
				<img className="w-12 xl:w-28 mb-4" src={logoDAEE} alt="DAEE" />
				<h1 className="text-wrap font-bold text-white text-md mb-4">
					Todos os sites em um único só lugar!
				</h1>
			</div>

			<div>
				<p className="text-base text-white">MAIS ACESSADOS</p>

				<div className="flex w-full xl:space-x-4 space-x-1 mb-4">
					<Button href="https://governosp.sharepoint.com/sites/intranet.daee/SitePages/TopicHome.aspx">
						Intranet
					</Button>
					<Button href="https://outlook.office.com/mail/">E-mail</Button>
					<Button href="https://sgi-websam2s-projects.vercel.app/">SGI</Button>
					<Button href="https://doe.sp.gov.br/sumario">DOE</Button>
					<Button href="https://www.imprensaoficial.com.br/">Imprensa</Button>
				</div>
			</div>

			<div className="flex flex-col items-center">
				<Button href="https://governosp-my.sharepoint.com/:f:/g/personal/samuel_zezilia_spaguas_sp_gov_br/Eh9_uoF_rU1Gvc896VchcGcBwwoT4wGPQlnGGChor_s6TA">
					COMUNICAÇÃO VISUAL
				</Button>
				{/* <div
					className="slide-container xl:cursor-pointer"
					onClick={openFullScreen}
				>
					<img
						className="slide-image"
						src={images[currentImageIndex]}
						alt="Evento"
					/>
				</div> */}
			</div>

			<Accordion />
			<div className="w-full">
				<p className="text-base text-white">LISTA TELEFÔNICA</p>
				<Search />
			</div>

			{isFullScreen && (
				<div className="fixed inset-0 bg-blue-dark bg-opacity-75 flex items-center justify-center z-50">
					<div className="relative">
						<img
							className="max-w-full max-h-full"
							src={images[currentImageIndex]}
							alt="Evento"
						/>
						<button
							type="button"
							className="absolute bg-red-dark top-4 right-4 text-white py-2 px-4 rounded"
							onClick={closeFullScreen}
						>
							Fechar
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
