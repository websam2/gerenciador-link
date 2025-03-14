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
		<section className="flex flex-col p-4 items-center h-full lg:w-1/3 lg:justify-between relative bg-gradient-to-bl from-blue-dark to-blue text-center">
			<FavoriteButton />
			<div className="flex flex-col items-center">
				<img className="w-12 lg:w-28 mb-4" src={logoDAEE} alt="DAEE" />
				<h1 className="text-wrap font-bold text-white text-md mb-4">
					Todos os sites em um único só lugar!
				</h1>
			</div>

			<div>
				<p className="text-base text-white">MAIS ACESSADOS</p>

				<div className="flex lg:flex-wrap lg:space-x-4 lg:justify-center space-x-1 mb-4">
					<Button href="https://governosp.sharepoint.com/sites/intranet.daee/SitePages/TopicHome.aspx">
						Intranet
					</Button>
					<Button href="https://outlook.office.com/mail/">E-mail</Button>
					<Button href="https://sgi-spaguas.vercel.app/">SGI</Button>
					<Button href="https://doe.sp.gov.br/sumario">DOE</Button>
					<Button href="https://resumo-fiscalizacao.vercel.app/">
					Resumo Fiscalização
				</Button>
				</div>
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
