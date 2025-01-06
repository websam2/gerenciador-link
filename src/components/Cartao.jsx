import dados from "../assets/dados.json";
import PropTypes from "prop-types";

function Cartao({ projetoId }) {
	const projeto = dados.find((p) => p.id === projetoId);

	if (!projeto) {
		return <div>Projeto não encontrado</div>;
	}

	return (
		<div className="flex justify-center items-center p-6 relative z-0">
			<div className="bg-dark shadow-xl rounded-xl overflow-hidden max-w-5xl relative border-2 border-white">
				<img
					className="w-full h-full object-cover absolute top-0 left-0 opacity-10"
					src={projeto.banner}
					alt={`banner do ${projeto.titulo}`}
					id="banner"
				/>
				<div className="rounded-lg shadow-lg p-10 space-y-6 md:space-y-10">
					<h2 className="text-lg font-bold text-yellow lg:text-xl 2lg:text-2xl">
						{projeto.titulo}
					</h2>
					<p className="text-blue md:text-md lg:text-lg">
						{projeto.descricao}
					</p>
					<div className="flex flex-row justify-center space-x-4">
						{Object.entries(projeto.tecnologia).map(([tech, iconPath]) => (
							<div className="w-6" key={tech}>
								<img
									className="hover:sepia opacity-45"
									src={iconPath}
									alt={tech}
								/>
							</div>
						))}
					</div>
					<div className="flex space-x-10 flex-row justify-center">
						<a
							className="bg-blue hover:bg-yellow text-dark font-bold py-2 px-4 rounded z-10"
							href={projeto.acesso.deploy}
							id="deploy"
							target="_blank"
							rel="noreferrer"
						>
							Deploy
						</a>
						<a
							className="bg-blue hover:bg-yellow text-dark font-bold py-2 px-4 rounded z-10"
							href={projeto.acesso.github}
							id="github"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
Cartao.propTypes = {
	projetoId: PropTypes.number.isRequired,
};
export default Cartao;