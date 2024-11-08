import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular, faCar, faGasPump, faSnowflake, faBath, faUtensils, faTv, faMicrochip, faStar, faHeart as faHeartSolid  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";

export default function CamperCard({ camper }) {
    console.log("Rendering CamperCard with camper:", camper);
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites.includes(camper.id);

    const handleFavoriteClick = () => {
        dispatch(toggleFavorite(camper.id));
    };
    return (
        <div>
            <img src={camper.gallery[0]?.thumb} alt={camper.name} />
            <div>
                <h3>{camper.name}</h3>
                <p>€{camper.price.toFixed(2)}</p>
                <button onClick={handleFavoriteClick}>
                <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
                </button>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faStar} />
                    {camper.rating} ({camper.reviews.length} Reviews)
                </span>
                <span>
                    {camper.location}
                </span>
            </div>
            <p>
                {camper.description}
            </p>
            <div>
                {camper.transmission && <span><FontAwesomeIcon icon={faCar} /> {camper.transmission}</span>}
                {camper.engine && <span><FontAwesomeIcon icon={faGasPump} /> {camper.engine}</span>}
                {camper.AC && <span><FontAwesomeIcon icon={faSnowflake} /> AC</span>}
                {camper.bathroom && <span><FontAwesomeIcon icon={faBath} /> Bathroom</span>}
                {camper.kitchen && <span><FontAwesomeIcon icon={faUtensils} /> Kitchen</span>}
                {camper.TV && <span><FontAwesomeIcon icon={faTv} /> TV</span>}
                {camper.microwave && <span><FontAwesomeIcon icon={faMicrochip} /> Microwave</span>}
            </div>
            <Link to="/catalog/:id">
                <button>Show more</button>
            </Link>
        </div>
    );
}