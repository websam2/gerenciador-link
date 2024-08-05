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
					<h1 className="font-bold text-text text-xl m-4">
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
				<div className="flex flex-col p-4 text-lg w-full text-bg">
					<p>José Arlindo - 10/08</p>
					<p>Jucelene - 12/08</p>
					<p>Andressa - 15/08</p>
					<p>Laila - 18/08</p>
					<p>Raquelly - 22/08</p>
				</div>
			</div>
		</div>
	);
}

export default Button;
