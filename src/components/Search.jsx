import { useEffect, useState } from "react";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/data/listaTelefonica.json");
			if (response.ok) {
				const json = await response.json();
				setData(json.listaTelefonica);
			} else {
				console.error("Erro ao carregar o arquivo JSON:", response.status);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (searchTerm) {
			const filteredResults = data
				.filter((item) =>
					item.nome.toLowerCase().includes(searchTerm.toLowerCase()),
				)
				.slice(0, 2);
			setResults(filteredResults);
		} else {
			setResults([]);
		}
	}, [searchTerm, data]);

	return (
		<div className="w-full">
			<input
				type="text"
				placeholder="Digite o nome completo do funcionário"
				className="w-full p-2 pl-4 border border-blue-dark rounded-md"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className=" overflow-clip">
				{results.map((result) => (
					<div
						key={result.id}
						className="p-2 border-b border-blue-dark"
					>
						<p className="font-bold text-text text-wrap">{result.nome}</p>
						<p className="text-text">{result.telefone}</p>
						<p className="text-text">{result.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Search;
