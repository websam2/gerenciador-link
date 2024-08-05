import { useEffect, useState } from "react";
import logoDAEE from "/logoDAEE.svg";
import APIOpenWather from "../components/APIOpenWather";
import Button from "../components/Button";

const Home = () => {
	return (
		<section
			className="flex flex-col items-center h-full xl:w-1/3 xl:justify-between relative bg-gradient-to-bl from-blue-dark to-blue text-center xl:cursor-pointer"
			id="listItems"
		>
			<img className="m-4 w-32 xl:cursor-pointer" src={logoDAEE} alt="DAEE" />
			<h1 className="text-wrap font-bold text-text text-2xl m-4">
				Todos os sites em um único só lugar!
			</h1>
			<div>
				<Button href="https://governosp.sharepoint.com/sites/intranet.daee/SitePages/TopicHome.aspx">
					Intranet
				</Button>
				<Button href="https://outlook.office.com/mail/">E-mail</Button>
				<Button href="https://sgi-websam2s-projects.vercel.app/">SGI</Button>
			</div>
			<APIOpenWather />
		</section>
	);
};

export default Home;
