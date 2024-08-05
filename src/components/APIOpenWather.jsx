import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function APITempoLocal() {
    const [removeLoading, setRemoveLoading] = useState(false);

    const [cities, setCities] = useState([
        { name: "Registro", lat: -24.49496608966295, long: -47.846437048809655 },
    ]);

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const newData = [];

            for (const city of cities) {
                try {
                    const res = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=046d03459bcbd448c36d5d6e8b24332c&units=metric&lang=pt_br`,
                    );

                    newData.push({
                        name: city.name,
                        temperature: res.data.main.temp,
                        weather: res.data.weather[0].description,
                        icon: res.data.weather[0].icon,
                    });

                    setRemoveLoading(true);
                } catch (err) {
                    console.error(err.message || "Algo de errado! Por favor tente mais tarde.");
                }
            }

            setWeatherData(newData);
        };

        fetchWeatherData(); // Initial fetch

        const intervalId = setInterval(fetchWeatherData, 60 * 60 * 1000); // 60 minutes in milliseconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [cities]);

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
            {weatherData.map((data) => (
                <div key={data.name} className="flex flex-col text-text rounded-md border-2 p-4">
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

