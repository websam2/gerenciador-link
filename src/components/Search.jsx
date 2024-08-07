import { useEffect, useState } from "react";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/src/assets/funcionarios.json");
			const json = await response.json();
			setData(json.Funcionarios);
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (searchTerm) {
			const filteredResults = data
				.filter((item) =>
					item.Nome.toLowerCase().includes(searchTerm.toLowerCase()),
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
					<div key={result.Prontuário} className="p-2 border-b border-blue-dark">
						<p className="font-bold text-text text-wrap">{result.Nome}</p>
						<p className="text-text">{result["Telefone Comercial"]}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Search;
