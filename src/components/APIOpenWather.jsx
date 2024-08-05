import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function APITempoLocal() {
	const [removeLoading, setRemoveLoading] = useState(false);

	const [cities, setCities] = useState([
		{ name: "Registro", lat: -24.49496608966295, long: -47.846437048809655 },
	]);

	const [weatherData, setWeatherData] = useState([]);

	const fetchWeatherData = async () => {
		const newData = [];

		for (const city of cities) {
			try {
				const res = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=297cbb1ac83f050fc6a4126f11cd51bd&units=metric&lang=pt_br`,
				);

				newData.push({
					name: city.name,
					temperature: res.data.main.temp,
					weather: res.data.weather[0].description,
					icon: res.data.weather[0].icon,
				});

				setRemoveLoading(true);
			} catch (err) {
				res.status(err.response ? err.response.status : 500);
				res.send(err.message || "Algo de errado! Por favor tente mais tarde.");
			}
		}

		setWeatherData(newData);
	};
	useEffect(() => {
		fetchWeatherData();
	});

	// data atualizada diariamente
	const dataAtual = new Date();
	const dia = dataAtual.getDate();
	const mes = dataAtual.getMonth() + 1;
	const ano = dataAtual.getFullYear();
	const diasDaSemana = [
		"Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado",
	];
	const nomeDoDiaDaSemana = diasDaSemana[dataAtual.getDay()];

	return (
		<>
			{weatherData.map((data, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div key={index} className="flex flex-col text-text rounded-md border-2 p-4">
					<div className="flex flex-row justify-between">
						<div className="flex flex-col m-2">
							<div className="text-2xl">
								<h1>{data.name}</h1>
							</div>
							<div>
								{nomeDoDiaDaSemana} - {dia}/{mes}/{ano}
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center">
						<img
							width={100}
							height={100}
							src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
							alt="ícone do clima"
						/>
						<h2 className="text-7xl">{data.temperature.toFixed(0)}ºC</h2>
						<h2>{data.weather}</h2>
					</div>
				</div>
			))}
			{!removeLoading && <Loading />}
		</>
	);
}
