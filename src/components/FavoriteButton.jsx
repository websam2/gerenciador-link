import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavoriteButton = () => {
	const handleAddToFavorites = () => {
		alert("Pressione Ctrl+D para adicionar este site aos seus favoritos.");
	};

	return (
		<button
			type="button"
			onClick={handleAddToFavorites}
			className="hidden xl:block absolute top-0 right-0 m-4 text-yellow"
		>
			<FontAwesomeIcon icon={faStar} />
		</button>
	);
};

export default FavoriteButton;
