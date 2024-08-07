import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Button() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleToggle = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className="relative">
			<button
				type="button"
				className="relative flex items-center w-full p-4 transition-all ease-in cursor-pointer group"
				onClick={handleToggle}
			>
				<h1 className="font-bold text-text xl:text-xl mr-4">
					ANIVERSARIANTES DE AGOSTO
				</h1>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`absolute text-bg right-0 transition-transform ${isCollapsed ? "" : "rotate-180"}`}
				/>
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? "h-0" : "h-auto"}`}
				style={{ maxHeight: isCollapsed ? "0" : "500px" }} // Ajustar maxHeight conforme necessário
			>
				<div className="flex flex-col text-lg w-full text-bg space-y-2">
					<div className="flex flex-row justify-between items-center bg-button w-full rounded-md text-lg pr-4">
						<div className="bg-red-dark p-2 rounded-md">
							<p>José Arlindo</p>
						</div>
						<div>
							<p>10/08</p>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center bg-button w-full rounded-md text-lg pr-4">
						<div className="bg-red-dark p-2 rounded-md">
							<p>Jucelene</p>
						</div>
						<div>
							<p>12/08</p>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center bg-button w-full rounded-md text-lg pr-4">
						<div className="bg-red-dark p-2 rounded-md">
							<p>Andressa</p>
						</div>
						<div>
							<p>15/08</p>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center bg-button w-full rounded-md text-lg pr-4">
						<div className="bg-red-dark p-2 rounded-md">
							<p>Laila</p>
						</div>
						<div>
							<p>18/08</p>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center bg-button w-full rounded-md text-lg pr-4">
						<div className="bg-red-dark p-2 rounded-md">
							<p>Raquelly</p>
						</div>
						<div>
							<p>22/08</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Button;
