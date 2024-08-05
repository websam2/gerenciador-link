import logoDAEE from "/logoDAEE.svg";
import { useEffect, useState } from "react";

const Home = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date().toLocaleString());
      }, 1000);
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
	return (
		<section
			className="flex flex-col h-full xl:w-96 xl:justify-between relative bg-gradient-to-bl from-blue-dark to-blue text-center xl:cursor-pointer"
			id="listItems"
		>
			<img
				className="m-4 xl:cursor-pointer"
				src={logoDAEE}
				alt="DAEE"
			/>
			<h1 className="text-wrap font-bold text-text m-4">
				Todos os sites em um único só lugar!
			</h1>
			<p className="text-text">{ currentDateTime }</p>
		</section>
	);
}

export default Home;
