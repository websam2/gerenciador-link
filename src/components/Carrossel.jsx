import { useState } from "react";
import Cartao from "./Cartao";
import dados from "../assets/dados.json";

function Carrossel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % dados.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + dados.length) % dados.length,
		);
	};

	return (
		<div className="w-full relative">
			<Cartao className="relative" projetoId={dados[currentIndex].id} />
			<div className="absolute inset-0 flex items-center justify-between pointer-events-none">
				<button
					type="button"
					onClick={prevSlide}
					className="w-12 h-12 m-2 rounded-full bg-white hover:bg-blue text-dark pointer-events-auto"
				>
					❮
				</button>
				<button
					type="button"
					onClick={nextSlide}
					className="w-12 h-12 m-2 rounded-full bg-white hover:bg-blue text-dark pointer-events-auto"
				>
					❯
				</button>
			</div>
		</div>
	);
}

export default Carrossel;