import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Button() {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [birthdays, setBirthdays] = useState([]);

	const handleToggle = () => {
		setIsCollapsed(!isCollapsed);
	};

	// Obter o mês atual em português
	const currentMonth = new Date().toLocaleString("pt-BR", { month: "long" });

	useEffect(() => {
		const currentMonthIndex = new Date().getMonth() + 1; // Adicionando 1 para corresponder ao mês em 'dd/MM/yyyy'

		fetch("/data/aniversariante.json")
			.then((response) => response.json())
			.then((data) => {
				// Mapeia os dados e filtra pelo mês atual
				const currentMonthBirthdays = data.aniversariante
					.filter((person) => {
						const personMonth = Number.parseInt(person.data.split("/")[1], 10); // Extrai o mês da data
						return personMonth === currentMonthIndex;
					})
					.map((person) => ({
						...person,
						data: formatData(person.data), // Formata a data como 'dd/MM'
						nome: getFirstName(person.nome), // Extrai o primeiro nome
					}));

				setBirthdays(currentMonthBirthdays);
			})
			.catch((error) =>
				console.error("Error fetching the aniversariante:", error),
			);
	}, []);

	// formatar a data como 'dd/MM'
	const formatData = (dateString) => {
		const [day, month] = dateString.split("/"); // Extrai dia e mês
		return `${day}/${month}`; // Retorna formato 'dd/MM'
	};

	// obter o primeiro nome
	const getFirstName = (fullName) => {
		return fullName.split(" ")[0]; // Retorna a primeira palavra do nome
	};

	return (
		<div className="relative">
			{birthdays.length > 0 ? (
				<div>
					<button
						type="button"
						className="relative flex items-center w-full p-4 transition-all ease-in cursor-pointer group"
						onClick={handleToggle}
					>
						<h1 className="font-bold text-white xl:text-xl mr-4 uppercase">
							Aniversariantes de {currentMonth}
						</h1>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={`absolute text-white right-0 transition-transform ${
								isCollapsed ? "" : "rotate-180"
							}`}
						/>
					</button>
					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							isCollapsed ? "h-0" : "h-auto"
						}`}
						style={{ maxHeight: isCollapsed ? "0" : "500px" }}
					>
						<div className="flex flex-col text-lg w-full text-white space-y-2">
							{birthdays.map((section) => (
								<div
									key={section.id}
									className="flex flex-row justify-between items-center bg-button w-full rounded-md text-lg pr-4"
								>
									<div className="bg-red-dark p-2 rounded-md">
										<p>{section.nome}</p>
									</div>
									<div>
										<p>{section.data}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<p className="text-white">Nenhum aniversariante neste mês.</p>
			)}
		</div>
	);
}

export default Button;
