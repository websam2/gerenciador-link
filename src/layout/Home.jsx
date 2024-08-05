import { useState } from "react";
import logoDAEE from "/logoDAEE.svg";
import Imagem from "../assets/images/Encontro com as ouvidorias.jpg";
import APIOpenWather from "../components/APIOpenWather";
import Button from "../components/Button";
import Accordion from "../components/Accordion";

const Home = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const openFullScreen = () => {
		setIsFullScreen(true);
	};

	const closeFullScreen = () => {
		setIsFullScreen(false);
	};

	return (
		<section
			className="flex flex-col items-center h-full xl:w-1/3 xl:justify-between relative bg-gradient-to-bl from-blue-dark to-blue text-center"
			id="listItems"
		>
			<div className="flex flex-col items-center">
				<img className="m-4 w-28" src={logoDAEE} alt="DAEE" />
				<h1 className="text-wrap font-bold text-text text-xl m-4">
					Todos os sites em um único só lugar!
				</h1>
			</div>

			<div className="flex w-full space-x-4 p-4">
				<Button href="Intranet">Intranet</Button>
				<Button href="https://outlook.office.com/mail/">E-mail</Button>
				<Button href="https://sgi-websam2s-projects.vercel.app/">SGI</Button>
			</div>
			<div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					className="p-4 cursor-pointer"
					src={Imagem}
					alt="Encontro"
					onClick={openFullScreen}
				/>
			</div>

			<Accordion/>
			{/* <APIOpenWather /> */}

			{isFullScreen && (
				<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
					<div className="relative">
						<img
							className="max-w-full max-h-full"
							src={Imagem}
							alt="Encontro"
						/>

						<button
							type="button"
							className="absolute bg-red-dark text-text top-4 right-4 bg-white text-black py-2 px-4 rounded"
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
